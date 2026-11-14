import {ArrowLeft, ArrowUpLeft, Bot, Check, ChevronDown, Cloud, Code2, Cpu, FolderOpen, Laptop, LockKeyhole, Monitor, Play, ShieldCheck, Sparkles, Workflow, Zap, CircleHelp, Terminal, MousePointer2} from "lucide-react";

const price = Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_TOMAN || 0);
const formattedPrice = price > 0 ? new Intl.NumberFormat("fa-IR").format(price) : null;

const features = [
  {icon: Laptop, number: "01", title: "اتصال به محیط ویندوز", text: "دستیار هوشمند را به کامپیوتر خود نزدیک کنید و امکان کار با ابزارهای محلی را فراهم کنید."},
  {icon: Workflow, number: "02", title: "گردش‌کارهای چندمرحله‌ای", text: "برای کارهای تکراری و چندمرحله‌ای، از کمک هوش مصنوعی در کنار ابزارهای خود استفاده کنید."},
  {icon: ShieldCheck, number: "03", title: "دسترسی تحت کنترل شما", text: "سطح دسترسی ابزارها و فایل‌ها را آگاهانه مدیریت کنید؛ کنترل نهایی دست شماست."},
  {icon: Zap, number: "04", title: "راه‌اندازی قابل‌فهم", text: "مراحل نصب و اتصال را دنبال کنید و محیط کار خود را برای استفاده آماده سازید."}
];

const steps = [
  ["01", "دریافت هادکس", "نسخه نرم‌افزار را دریافت کنید."],
  ["02", "نصب و اتصال", "هادکس را روی ویندوز نصب و تنظیم کنید."],
  ["03", "شروع کار", "با کمک دستیار هوشمند، کارهای دیجیتال خود را پیش ببرید."]
];

const faqs = [
  ["هادکس چه کاری انجام می‌دهد؟", "هادکس برای ایجاد ارتباط میان دستیار هوش مصنوعی و کامپیوتر شما طراحی شده است؛ قابلیت‌های دقیق به نسخه نرم‌افزار و مجوزهای فعال بستگی دارد."],
  ["آیا هادکس روی لپ‌تاپ هم نصب می‌شود؟", "بله، هدف محصول استفاده روی کامپیوتر و لپ‌تاپ ویندوزی است. جزئیات حداقل سیستم موردنیاز در راهنمای نصب درج خواهد شد."],
  ["چطور خرید خود را پرداخت کنم؟", "پس از فعال شدن تنظیمات فروشگاه، می‌توانید از طریق درگاه رسمی زرین‌پال پرداخت کنید. نتیجه پرداخت در سمت سرور بررسی می‌شود."],
  ["بعد از خرید چطور نرم‌افزار را دریافت می‌کنم؟", "روش تحویل و فعال‌سازی لایسنس پس از نهایی شدن فرایند فروش در همین سایت اطلاع‌رسانی می‌شود."]
];

export default function Home() {
  return <main className="site-shell">
    <header className="site-header sticky top-0 z-40">
      <div className="container flex h-[78px] items-center justify-between gap-5">
        <a href="#home" className="brand-lockup">
          <span className="brand-symbol"><Sparkles size={23}/></span>
          <span><strong>Hadex</strong><small>هوش مصنوعی، در تعامل با دنیای شما</small></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#features">قابلیت‌ها</a><a href="#how">شروع کار</a><a href="#video">معرفی محصول</a><a href="#faq">پرسش‌ها</a>
        </nav>
        <a href="#buy" className="header-cta">خرید هادکس <ArrowLeft size={16}/></a>
      </div>
    </header>

    <section id="home" className="hero-section">
      <div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="live-dot"/> ابزار تازه‌ای برای کار هوشمندانه‌تر <span className="kicker-line"/></div>
          <h1>هوش مصنوعی را<br/><span>به دنیای واقعی</span><br/>کامپیوترتان بیاورید.</h1>
          <p className="hero-description">هادکس پلی میان دستیار هوشمند و کامپیوتر شماست؛ برای اینکه از گفت‌وگو فراتر بروید و کارهای دیجیتال را با کمک هوش مصنوعی پیش ببرید.</p>
          <div className="hero-actions"><a href="#buy" className="btn-primary">شروع با هادکس <ArrowLeft size={18}/></a><a href="#video" className="btn-quiet"><span className="play-disc"><Play size={13} fill="currentColor"/></span> تماشای معرفی</a></div>
          <div className="hero-proof"><span><Check size={15}/> ویژه ویندوز</span><i/><span><Check size={15}/> کنترل دسترسی</span><i/><span><Check size={15}/> مناسب لپ‌تاپ و دسکتاپ</span></div>
        </div>

        <div className="hero-visual" aria-label="نمای مفهومی ارتباط هوش مصنوعی و کامپیوتر">
          <div className="visual-label visual-label-top"><span className="live-dot"/> ارتباط هوشمند</div>
          <div className="visual-backdrop"/>
          <div className="connection-line connection-line-a"/><div className="connection-line connection-line-b"/>
          <div className="ai-panel">
            <div className="panel-top"><span className="panel-brand"><span className="mini-mark"><Sparkles size={13}/></span> HADEx / ASSISTANT</span><span className="panel-status">ONLINE</span></div>
            <div className="assistant-intro"><span className="assistant-avatar"><Bot size={23}/></span><div><b>دستیار هوشمند</b><small>آماده همکاری با شما</small></div></div>
            <div className="chat-user">فایل‌های پروژه را مرتب کن.</div>
            <div className="chat-answer"><span className="answer-mark"><Sparkles size={13}/></span><div><b>حتماً. ابتدا پوشه پروژه را بررسی می‌کنم.</b><small>برای ادامه، دسترسی لازم را تأیید کنید.</small></div></div>
            <div className="panel-input"><span>پیام خود را بنویسید...</span><span className="input-send"><ArrowUpLeft size={16}/></span></div>
          </div>
          <div className="desktop-panel">
            <div className="desktop-bar"><span/><span/><span/><small>MY COMPUTER</small></div>
            <div className="desktop-content"><div className="desktop-side"><span/><span/><span/><span/></div><div className="file-area"><div className="file-item"><FolderOpen size={21}/><small>Projects</small></div><div className="file-item"><FolderOpen size={21}/><small>Documents</small></div><div className="file-item"><Terminal size={21}/><small>Workspace</small></div></div></div>
            <div className="desktop-footer"><span><span className="live-dot"/> محیط ویندوز</span><span>دسترسی با اجازه شما</span></div>
          </div>
          <div className="floating-chip chip-secure"><LockKeyhole size={15}/> کنترل در اختیار شما</div>
          <div className="floating-chip chip-connect"><span className="live-dot"/> اتصال مفهومی</div>
          <div className="visual-label visual-label-bottom">H A D E X <span>•</span> WORK SMARTER</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>یک پل میان</span><b>هوش مصنوعی</b><span className="bottom-cross">×</span><b>کامپیوتر شما</b><span className="bottom-note">تجربه‌ای متفاوت از کار روزمره با فناوری</span></div>
    </section>

    <section id="features" className="section features-section">
      <div className="container">
        <div className="section-heading split-heading"><div><span className="section-kicker">01 / قابلیت‌ها</span><h2>از پاسخ گرفتن،<br/><em>تا انجام دادن.</em></h2></div><p>هادکس برای نزدیک‌تر کردن هوش مصنوعی به ابزارهایی ساخته شده که هر روز با آن‌ها کار می‌کنید. یک تجربه کاربردی، با تمرکز بر ارتباط و کنترل.</p></div>
        <div className="feature-layout">
          <article className="feature-lead"><div className="feature-lead-top"><span>CORE EXPERIENCE</span><span>01 — 04</span></div><div className="feature-lead-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-center"><Cpu size={45}/></div><span className="art-node node-one"><Monitor size={19}/></span><span className="art-node node-two"><Bot size={19}/></span><span className="art-node node-three"><Workflow size={19}/></span></div><div className="feature-lead-bottom"><h3>یک ارتباط، امکانات بیشتر</h3><p>دستیار هوشمند در کنار محیط کاری شما؛ نه فقط در یک پنجره گفت‌وگو.</p></div></article>
          <div className="feature-list">{features.map(({icon:Icon,number,title,text})=><article className="feature-row" key={number}><span className="feature-number">{number}</span><span className="feature-icon"><Icon size={21}/></span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpLeft className="feature-arrow" size={19}/></article>)}</div>
        </div>
      </div>
    </section>

    <section id="how" className="process-section">
      <div className="container"><div className="process-head"><div><span className="section-kicker">02 / مسیر شروع</span><h2>شروعی روشن،<br/><em>قدم‌به‌قدم.</em></h2></div><p>برای ورود به تجربه هادکس، مسیر ساده‌ای پیش روی شماست.</p></div>
        <div className="process-track">{steps.map(([n,t,d],i)=><article className="process-step" key={n}><div className="step-top"><span>{n}</span>{i===0?<Laptop size={21}/>:i===1?<MousePointer2 size={21}/>:<Sparkles size={21}/>}</div><h3>{t}</h3><p>{d}</p>{i<2&&<span className="step-connector"/>}</article>)}</div>
      </div>
    </section>

    <section id="video" className="section video-section"><div className="container video-grid">
      <div className="video-copy"><span className="section-kicker">03 / آشنایی با محصول</span><h2>قبل از انتخاب،<br/><em>از نزدیک ببینید.</em></h2><p>در ویدیوی معرفی، با فضای هادکس، روند نصب و شیوه استفاده از آن آشنا شوید. این بخش برای نمایش ویدیوی واقعی محصول آماده شده است.</p><div className="video-points"><span><Check size={16}/> معرفی قابلیت‌ها</span><span><Check size={16}/> راهنمای نصب و اتصال</span><span><Check size={16}/> آشنایی با محیط نرم‌افزار</span></div></div>
      <div className="video-frame"><div className="video-frame-top"><span>HADEX / PRODUCT FILM</span><span>INTRODUCTION</span></div><div className="video-inner"><video controls preload="metadata" src="/hadex-intro.mp4">مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.</video></div><div className="video-caption"><span>ویدیوی رسمی معرفی هادکس</span><span>01 — PLAY</span></div></div>
    </div></section>

    <section id="buy" className="purchase-section"><div className="container purchase-wrap"><div className="purchase-copy"><span className="section-kicker">04 / انتخاب شما</span><h2>آماده‌اید متفاوت<br/><em>کار کنید؟</em></h2><p>با هادکس، ارتباط تازه‌ای میان هوش مصنوعی و کامپیوتر خود تجربه کنید.</p><div className="purchase-assurance"><ShieldCheck size={19}/><span>پرداخت آنلاین از طریق درگاه رسمی زرین‌پال</span></div></div>
      <div className="purchase-card"><div className="purchase-card-head"><div><span>HADEX SOFTWARE</span><h3>نسخه اصلی هادکس</h3></div><div className="purchase-logo"><Sparkles size={24}/></div></div><div className="purchase-divider"/><ul><li><Check size={17}/> فایل نصب نرم‌افزار</li><li><Check size={17}/> راهنمای راه‌اندازی</li><li><Check size={17}/> به‌روزرسانی‌ها طبق شرایط محصول</li></ul><div className="purchase-divider"/><div className="price-line"><span>قیمت محصول</span><div>{formattedPrice?<><strong>{formattedPrice}</strong><small>تومان</small></>:<b className="price-soon">به‌زودی اعلام می‌شود</b>}</div></div>{formattedPrice?<a href="/buy" className="btn-primary purchase-button">ادامه و پرداخت آنلاین <ArrowLeft size={18}/></a>:<div className="price-notice">برای فعال شدن خرید آنلاین، قیمت محصول و تنظیمات درگاه پرداخت باید در سرور ثبت شوند.</div>}<p className="purchase-footnote"><LockKeyhole size={13}/> اطلاعات پرداخت در بستر امن درگاه انجام می‌شود</p></div>
    </div></section>

    <section id="faq" className="section faq-section"><div className="container faq-grid"><div className="faq-heading"><span className="section-kicker">05 / پاسخ پرسش‌ها</span><h2>سؤالی<br/><em>دارید؟</em></h2><p>پاسخ پرسش‌های متداول درباره هادکس و خرید آن را اینجا پیدا کنید.</p><span className="faq-mark"><CircleHelp size={36}/></span></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} className="faq-item"><summary><span className="faq-index">0{i+1}</span><b>{q}</b><ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></section>

    <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a href="#home" className="brand-lockup"><span className="brand-symbol"><Sparkles size={23}/></span><span><strong>Hadex</strong><small>هوش مصنوعی، در تعامل با دنیای شما</small></span></a><p>هادکس؛ راهی تازه برای اتصال هوش مصنوعی به کامپیوتر و لپ‌تاپ شما.</p></div><div><h3>کاوش در هادکس</h3><a href="#features">قابلیت‌ها</a><a href="#how">شروع کار</a><a href="#video">معرفی محصول</a></div><div><h3>راهنمای مشتریان</h3><a href="#faq">پرسش‌های متداول</a><a href="#buy">شرایط خرید</a><span>پشتیبانی و راهنمای نصب</span><div className="enamad-area"><span>نماد اعتماد الکترونیکی</span><a referrerPolicy="origin" target="_blank" rel="noopener noreferrer" href="https://trustseal.enamad.ir/?id=8571653&Code=NVC2VeLm0R6u5F16bhvTbSaEXLEZjP7b"><img referrerPolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=8571653&Code=NVC2VeLm0R6u5F16bhvTbSaEXLEZjP7b" alt="نماد اعتماد الکترونیکی" style={{cursor:"pointer",width:92,height:"auto"}} code="NVC2VeLm0R6u5F16bhvTbSaEXLEZjP7b"/></a></div></div></div><div className="footer-bottom"><span>© تمامی حقوق این وب‌سایت متعلق به Hadex است.</span><span>ساخته‌شده برای تجربه‌ای هوشمندتر</span></div></div></footer>
  </main>;
}
