import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
export const runtime="nodejs";
export async function GET(request:Request){
 const url=new URL(request.url);const authority=url.searchParams.get("Authority");const status=url.searchParams.get("Status");const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";
 if(!authority||status!=="OK")return NextResponse.redirect(new URL("/payment/result?status=cancelled",siteUrl));
 try{
  const order=await prisma.order.findUnique({where:{authority}});if(!order)return NextResponse.redirect(new URL("/payment/result?status=invalid",siteUrl));
  if(order.paymentStatus==="PAID")return NextResponse.redirect(new URL("/payment/result?status=success",siteUrl));
  const merchantId=process.env.ZARINPAL_MERCHANT_ID;if(!merchantId)return NextResponse.redirect(new URL("/payment/result?status=error",siteUrl));
  const sandbox=process.env.ZARINPAL_SANDBOX==="true";const apiBase=sandbox?"https://sandbox.zarinpal.com/pg/v4/payment":"https://payment.zarinpal.com/pg/v4/payment";
  const response=await fetch(`${apiBase}/verify.json`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({merchant_id:merchantId,amount:order.amountRial,authority}),cache:"no-store"});
  const data=await response.json();const code=data?.data?.code;
  if(response.ok&&(code===100||code===101)){await prisma.order.update({where:{id:order.id},data:{paymentStatus:"PAID",refId:String(data.data.ref_id)}});return NextResponse.redirect(new URL("/payment/result?status=success",siteUrl));}
  await prisma.order.update({where:{id:order.id},data:{paymentStatus:"FAILED"}});return NextResponse.redirect(new URL("/payment/result?status=failed",siteUrl));
 }catch(error){console.error("ZarinPal verification error",error);return NextResponse.redirect(new URL("/payment/result?status=error",siteUrl));}
}
