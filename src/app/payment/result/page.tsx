import Link from "next/link";
import {CheckCircle2,CircleAlert,Clock3} from "lucide-react";
type Props={searchParams:Promise<{status?:string}>};
export default async function PaymentResult({searchParams}:Props){
 const {status}=await searchParams;const success=status==="success";const cancelled=status==="cancelled";
 const title=success?"پرداخت با موفقیت تأیید شد":cancelled?"پرداخت انجام نشد":"وضعیت پرداخت مشخص نشد";
 const description=success?"تراکنش شما توسط سرور و از طریق زرین‌پال تأیید شد. اطلاعات سفارش ثبت شده است.":cancelled?"پرداخت را لغو کردید یا تراکنش از درگاه بازنگشته است. در صورت تمایل دوباره تلاش کنید.":"نتوانستیم پرداخت را تأیید کنیم. اگر مبلغ از حساب شما کسر شده، پیش از پرداخت مجدد با پشتیبانی تماس بگیرید.";
 return <main className="grid min-h-screen place-items-center bg-[radial-gradient(ellipse_at_50%_0%,#dbeafe,transparent_45%),#f4f8ff] p-4"><div className="w-full max-w-lg rounded-[28px] border border-slate-100 bg-white p-8 text-center shadow-xl"><span className={`mx-auto grid h-20 w-20 place-items-center rounded-3xl ${success?"bg-emerald-50 text-emerald-600":"bg-amber-50 text-amber-600"}`}>{success?<CheckCircle2 size={39}/>:cancelled?<Clock3 size={39}/>:<CircleAlert size={39}/>}</span><h1 className="mt-6 text-2xl font-black">{title}</h1><p className="mt-3 leading-8 text-slate-500">{description}</p><Link href="/" className="btn-primary mt-7">بازگشت به سایت Hadex</Link></div></main>;
}