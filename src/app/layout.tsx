import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"هادکس | هوش مصنوعی، در کنار کامپیوتر شما",description:"با هادکس، هوش مصنوعی را به کامپیوتر و لپ‌تاپ خود متصل کنید.",metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000")};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="fa" dir="rtl"><body>{children}</body></html>}
