import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
export const runtime="nodejs";
export async function POST(request:Request){
 try{
  const merchantId=process.env.ZARINPAL_MERCHANT_ID;const amountToman=Number(process.env.PRODUCT_PRICE_TOMAN);const siteUrl=process.env.NEXT_PUBLIC_SITE_URL;
  if(!merchantId||!siteUrl||!Number.isSafeInteger(amountToman)||amountToman<1000)return NextResponse.json({error:"تنظیمات درگاه یا قیمت محصول روی سرور کامل نیست."},{status:503});
  const body=await request.json();const customerName=String(body.customerName||"").trim().slice(0,120);const customerEmail=String(body.customerEmail||"").trim().slice(0,200);const customerPhone=String(body.customerPhone||"").trim();
  if(customerName.length<3||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)||!/^09\d{9}$/.test(customerPhone))return NextResponse.json({error:"لطفاً نام، ایمیل و شماره موبایل معتبر وارد کنید."},{status:400});
  const amountRial=amountToman*10;if(!Number.isSafeInteger(amountRial))return NextResponse.json({error:"مبلغ محصول معتبر نیست."},{status:400});
  const order=await prisma.order.create({data:{customerName,customerEmail,customerPhone,amountRial}});
  const sandbox=process.env.ZARINPAL_SANDBOX==="true";const apiBase=sandbox?"https://sandbox.zarinpal.com/pg/v4/payment":"https://payment.zarinpal.com/pg/v4/payment";const callbackUrl=new URL("/api/payment/verify",siteUrl).toString();
  const gatewayResponse=await fetch(`${apiBase}/request.json`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({merchant_id:merchantId,amount:amountRial,callback_url:callbackUrl,description:`خرید نرم‌افزار Hadex - سفارش ${order.id}`,metadata:{email:customerEmail,mobile:customerPhone}}),cache:"no-store"});
  const gatewayData=await gatewayResponse.json();const authority=gatewayData?.data?.authority;
  if(!gatewayResponse.ok||!authority||gatewayData?.data?.code!==100){await prisma.order.update({where:{id:order.id},data:{paymentStatus:"GATEWAY_ERROR"}});return NextResponse.json({error:"زرین‌پال نتوانست درخواست پرداخت را ایجاد کند."},{status:502});}
  await prisma.order.update({where:{id:order.id},data:{authority}});
  const startUrl=sandbox?"https://sandbox.zarinpal.com/pg/StartPay/":"https://payment.zarinpal.com/pg/StartPay/";
  return NextResponse.json({url:`${startUrl}${encodeURIComponent(authority)}`});
 }catch(error){console.error("ZarinPal request error",error);return NextResponse.json({error:"خطا در ایجاد سفارش یا اتصال به درگاه پرداخت."},{status:500});}
}
