# Hadex Store
فروشگاه فارسی Hadex با Next.js، طراحی روشن و واکنش‌گرا، بخش ویدیو، فوتر دارای نماد اعتماد و مسیر پرداخت زرین‌پال.

## اجرای محلی در ویندوز
1. Node.js نسخه 20 یا بالاتر نصب باشد.
2. در پوشه پروژه اجرا کنید:
   ```powershell
   npm install
   Copy-Item .env.example .env
   ```
3. در فایل .env مقدارهای DATABASE_URL، ZARINPAL_MERCHANT_ID، PRODUCT_PRICE_TOMAN، NEXT_PUBLIC_PRODUCT_PRICE_TOMAN و NEXT_PUBLIC_SITE_URL را تنظیم کنید.
4. دیتابیس PostgreSQL را آماده و اجرا کنید:
   ```powershell
   npx prisma db push
   npm run dev
   ```
5. سایت در http://localhost:3000 باز می‌شود.

قیمت فقط از متغیر امن PRODUCT_PRICE_TOMAN خوانده می‌شود؛ مبلغ مرورگر ملاک نیست. سفارش در PostgreSQL ثبت می‌شود و نتیجه پرداخت با API تأیید زرین‌پال بررسی می‌شود.
برای ویدیوی واقعی، فایل یا لینک embed لازم است. برای Vercel متغیرهای محیطی را در Project Settings ثبت و PostgreSQL مدیریت‌شده متصل کنید.
