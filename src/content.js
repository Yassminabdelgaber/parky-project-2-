// كل النصوص في مكان واحد: ar = عربي ، en = إنجليزي
// عشان تعدّلي أي نص أو تضيفي لغة جديدة، عدّلي هنا بس.

const content = {
  ar: {
    pageTitle: "باركي | حوّل جراجك إلى مشروع أكثر ذكاءً",
    langBtn: "EN",
    langLabel: "English",

    nav: ["الرئيسية", "عن باركي", "مميزات باركي", "خدماتنا", "كيف نعمل", "تواصل معنا"],
    navDownload: "تحميل التطبيق ⬇",
    navPartner: "كن شريكًا معنا",

    hero: {
      label: "شراكة مواقف ذكية",
      title: "حوّل جراجك إلى مشروع أكثر ذكاءً",
      text: "انضم إلى باركي واجعل جراجك جزءًا من شبكة مواقف ذكية. اجذب المزيد من العملاء، ونظّم إدارة جراجك، وتابع أماكن الانتظار لحظيًا من مكان واحد.",
      join: "اطلب الانضمام",
      explore: "اكتشف خدماتنا",
      dashTitle: "نظرة عامة على الجراج",
      live: "مباشر",
      occupancy: "نسبة الإشغال",
      available: "متاح",
      total: "إجمالي الأماكن",
      note: "لوحة تحكم واحدة.. وإدارة كاملة لكل مكان.",
    },

    benefits: [
      { title: "ظهور أكبر", text: "تصل جراجك إلى السائقين القريبين" },
      { title: "إدارة أسهل", text: "تابع كل الأماكن من مكان واحد" },
      { title: "قرارات أذكى", text: "اعتمد على بيانات الإشغال المباشرة" },
    ],

    about: {
      title: "طريقة أذكى لإدارة مواقف السيارات",
      lead: "تربط باركي السائقين بأماكن الانتظار المتاحة، وتمنح أصحاب الجراجات أدوات سهلة لإدارة الأماكن والحجوزات والدخول من خلال منصة ذكية واحدة.",
      steps: [
        { title: "شبكة مترابطة", text: "اجعل جراجك أسهل في الوصول والحجز." },
        { title: "دخول رقمي", text: "دخول أسرع وأكثر سهولة باستخدام رمز QR." },
        { title: "إدارة واضحة", text: "تابع الإشغال وحركة الجراج لحظيًا." },
      ],
      note: "من خلال باركي، يظهر جراجك للسائقين الباحثين عن مكان مناسب، وتتم إدارة الحجوزات والإشغال والدخول الرقمي من خلال تجربة موحدة. هدفنا أن نقلل وقت البحث والتنظيم اليدوي، ونساعدك على متابعة تشغيل جراجك بصورة أوضح.",
    },

    features: {
      pill: "مميزات باركي",
      title: "كل ما تحتاجه لإدارة جراجك في تطبيق واحد",
      lead: "من إدارة الحراس إلى الدفع الإلكتروني ولوحة التحكم، صممنا باركي ليمنحك تحكمًا كاملًا وتجربة سلسة لك ولعملائك.",
      adminTag: "جديد · إدارة حسابات الحراس",
      adminTitle: "أنشئ حسابات حراسك وتحكّم فيها بنفسك",
      adminText: "يُنشئ صاحب الجراج حساب كل حارس من لوحة التحكم، ويحدد صلاحياته ويوقفه أو يلغيه في أي وقت دون الرجوع إلى باركي، بينما يتولى الحارس استقبال السيارات وتأكيد الحجوزات.",
      adminChecks: [
        "أنشئ حساب الحارس أو ألغه وحدد صلاحياته بنفسك",
        "مسح رمز QR لتسجيل دخول وخروج السيارات في ثوانٍ",
        "تأكيد الحجوزات ومتابعة الأماكن المتاحة لحظيًا",
        "سجل نشاط كامل لكل وردية لمراجعة الأداء بسهولة",
      ],
      adminBtn: "انضم كشريك وابدأ بإضافة حراسك",
      guardName: "أحمد محمود",
      guardRole: "حارس الجراج · الوردية الصباحية",
      inService: "في الخدمة",
      entriesToday: "دخول اليوم",
      exitsToday: "خروج اليوم",
      occupancy: "نسبة الإشغال",
      log1: "دخول · س ك ع 4821",
      log2: "خروج · ج م د 3170",
      scanQr: "▦ مسح رمز QR",
      mini: [
        { title: "أماكن متاحة لحظيًا", text: "يعرض التطبيق الأماكن الفارغة في جراجك الآن لتقليل الزحام وتوفير وقت السائقين." },
        { title: "دخول سريع برمز QR", text: "رمز فريد لكل حجز يُمسح عند البوابة لتسجيل الدخول والخروج فورًا." },
        { title: "حجز مسبق ودفع إلكتروني", text: "احجز مكانك مسبقًا وادفع من التطبيق بأمان، بدون نقد ولا انتظار عند البوابة." },
        { title: "حسابات متعددة للفريق", text: "أنشئ حسابات حراس وألغها وحدد صلاحياتها بنفسك من مكان واحد." },
        { title: "إشعارات فورية", text: "تنبيهات للحجوزات الجديدة وانتهاء المدة، لك وللحارس وللسائق في نفس اللحظة." },
        { title: "لوحة تحكم وتقارير", text: "تابع الإشغال والإيرادات وأوقات الذروة في تقارير واضحة تساعدك على اتخاذ القرار." },
      ],
    },

    growth: {
      title: "كل ما يحتاجه جراجك للنمو",
      sub: "مجموعة متكاملة من الأدوات لتسهيل إدارة المواقف وخدمة عملائك.",
      items: [
        { title: "عرض جراجك على المنصة", text: "اعرض موقع جراجك وسعته وأسعاره وخدماته للسائقين الباحثين عن موقف قريب." },
        { title: "إدارة الحجوزات", text: "تابع الحجوزات الجديدة والأماكن المتاحة وحركة الدخول والخروج من لوحة واحدة." },
        { title: "الدخول الذكي والمدفوعات", text: "سهّل دخول العملاء باستخدام رموز QR، مع دعم عمليات الدفع الإلكتروني." },
      ],
    },

    why: {
      title: "لماذا يختار أصحاب الجراجات باركي؟",
      sub: "باركي ليست مجرد وسيلة لعرض جراجك، بل نظام متكامل لإدارة نشاطك بذكاء.",
      items: [
        { title: "الوصول إلى عملاء أكثر", text: "زد فرص ظهور جراجك أمام السائقين الذين يبحثون عن أماكن انتظار في منطقتك." },
        { title: "تحكّم في جراجك", text: "تابع الأماكن المتاحة والحجوزات وكل تفاصيل التشغيل اليومي." },
        { title: "تابع أداء جراجك", text: "استفد من تقارير واضحة تساعدك على اتخاذ قرارات أفضل لنشاطك." },
      ],
    },

    start: {
      title: "ابدأ شراكتك مع باركي في 4 خطوات بسيطة",
      steps: [
        { title: "أرسل طلبك", text: "أدخل بياناتك وبيانات الجراج في النموذج." },
        { title: "نتواصل معك", text: "يراجع فريقنا طلبك ويتواصل معك." },
        { title: "نتفق على التفاصيل", text: "نشرح لك الخدمات ونناقش خطوات التعاون." },
        { title: "ابدأ مع باركي", text: "ينضم جراجك إلى شبكة باركي بعد الموافقة واستكمال الاتفاق." },
      ],
    },

    tech: {
      title: "تقنيات ذكية وراء كل مكان انتظار",
      lead: "تجمع باركي بين تطبيق السائق، ونظام إدارة المالك، وتقنيات الجراج الذكي للعمل جميعها ضمن منظومة واحدة متكاملة.",
      items: [
        { title: "توافر لحظي", text: "اعرف الأماكن المتاحة فورًا" },
        { title: "الدخول عبر QR", text: "دخول منظم وسريع" },
        { title: "لوحة تحكم المالك", text: "إدارة سهلة لجراجك" },
        { title: "مؤشرات ذكية", text: "افهم أنماط الاستخدام" },
      ],
    },

    join: {
      title: "خلّي جراجك يكبر مع باركي",
      text: "هل ترغب في الانضمام إلى شبكة مواقف باركي؟ أرسل بياناتك، وسيراجع فريق الشراكات طلبك ثم يتواصل معك لمناقشة التفاصيل والخطوات التالية.",
      note: "إرسال الطلب لا يعني إتمام التعاقد.",
      formTitle: "طلب الانضمام كشريك",
      formSub: "عرّفنا بجراجك لنبدأ التواصل.",
      fields: {
        fullName: { label: "الاسم بالكامل", ph: "اكتب اسمك" },
        phone: { label: "رقم الهاتف", ph: "+20 1X XXX XXXX" },
        email: { label: "البريد الإلكتروني", ph: "name@example.com" },
        garageName: { label: "اسم الجراج", ph: "اكتب اسم الجراج" },
        address: { label: "عنوان الجراج", ph: "المحافظة، المنطقة، والشارع" },
        spots: { label: "عدد أماكن الانتظار", ph: "مثال: 40" },
      },
      typeLabel: "نوع الجراج",
      typePh: "مغطى / مفتوح",
      typeOptions: ["مغطى", "مفتوح"],
      submit: "إرسال طلب الشراكة",
      foot: "بإرسال الطلب، توافق على تواصل فريق باركي معك بخصوص طلب الشراكة.",
      done: "تم إرسال طلبك بنجاح، سنتواصل معك قريبًا ✓",
    },

    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "هل إرسال الطلب يعني إتمام التعاقد؟", a: "لا، إرسال الطلب هو الخطوة الأولى فقط. يتم التعاقد بعد مراجعة فريقنا والاتفاق معك على التفاصيل." },
        { q: "ماذا يحدث بعد إرسال الطلب؟", a: "يراجع فريق الشراكات بياناتك ثم يتواصل معك لمناقشة التفاصيل والخطوات التالية." },
        { q: "هل يمكن لأي جراج التقديم؟", a: "يمكن لأصحاب الجراجات المغطاة والمفتوحة التقديم، ويقيّم الفريق كل طلب حسب الموقع والسعة." },
        { q: "ما البيانات المطلوبة للتقديم كشريك؟", a: "بياناتك الأساسية وبيانات الجراج: الاسم، الهاتف، البريد الإلكتروني، العنوان، عدد الأماكن ونوع الجراج." },
        { q: "هل أحتاج إلى أجهزة ذكية للبدء؟", a: "لا، يمكنك البدء باستخدام التطبيق فقط، وتُضاف التقنيات الذكية لاحقًا حسب احتياج جراجك." },
      ],
    },

    app: {
      title: "حمّل تطبيق Parky",
      sub: "كل ما تحتاجه لإدارة تجربة المواقف في تطبيق واحد.",
      cardTitle: "تجربة Parky في جيبك",
      cardText: "تابع حجوزات جراجك، وراقب الإشغال، ونظّم الدخول والخروج بسهولة من هاتفك.",
      checks: [
        "متابعة الحجوزات وحالة أماكن الانتظار",
        "إشعارات فورية وتحديثات لحظية",
        "إدارة أسهل من أي مكان",
      ],
      ios: "iOS · App Store",
      android: "Android",
      qrTitle: "امسح الكود للتنزيل",
      qrSub: "وجّه كاميرا هاتفك نحو الرمز",
      qrDemo: "رمز تجريبي للمعاينة",
      qrLink: "متاح لأجهزة iOS و Android",
      note: "لن نطلب منك أي بيانات شخصية لمجرد تنزيل التطبيق.",
    },

    guard: {
      crumbHome: "الرئيسية",
      title: "طلب حساب حارس",
      pill: "للملاك فقط",
      heading: "أضف حارسك إلى باركي",
      text: "هل تريد حسابًا لحارس جراجك؟ أرسل بيانات الحارس، وسيراجع فريق باركي الطلب ويفعّل الحساب ليبدأ العمل من تطبيق الحارس.",
      note: "يُفعَّل الحساب بعد مراجعة الطلب.",
      formSub: "أدخل بيانات الحارس لتراجع فريق باركي الطلب ويفعّل حسابه.",
      fields: {
        ownerName: { label: "اسم المالك", ph: "اكتب اسمك" },
        ownerPhone: { label: "رقم هاتف المالك", ph: "+20 1X XXX XXXX" },
        ownerEmail: { label: "البريد الإلكتروني", ph: "name@example.com" },
        garageName: { label: "اسم الجراج", ph: "اكتب اسم الجراج" },
        guardName: { label: "اسم الحارس بالكامل", ph: "الاسم كما في البطاقة" },
        guardPhone: { label: "رقم هاتف الحارس", ph: "+20 1X XXX XXXX" },
        guardId: { label: "الرقم القومي للحارس", ph: "14 رقمًا" },
        shift: { label: "الوردية", ph: "صباحي / مسائي / طوال اليوم" },
        startDate: { label: "تاريخ بدء العمل", ph: "" },
      },
      shiftOptions: ["صباحي", "مسائي", "طوال اليوم"],
      submit: "إرسال طلب الحساب",
      foot: "بإرسال الطلب، توافق على تواصل فريق باركي معك بخصوص حساب الحارس.",
      done: "تم إرسال طلب حساب الحارس بنجاح ✓",
    },

    footer: {
      ctaTitle: "جاهز لتحويل جراجك إلى مشروع أذكى؟",
      ctaText: "قدّم طلب الشراكة الآن وسيتواصل معك فريق باركي خلال 24 ساعة.",
      ctaBtn: "كن شريكًا معنا",
      brand: "باركي منصة ذكية تربط السائقين بأصحاب الجراجات، لتسهيل الحجز والدخول والدفع وإدارة المواقف في مكان واحد.",
      quickTitle: "روابط سريعة",
      quick: ["الرئيسية", "عن باركي", "مميزات باركي", "كيف نعمل", "الأسئلة الشائعة"],
      servicesTitle: "الخدمات",
      services: ["عرض جراجك على المنصة", "إدارة الحجوزات", "الدخول والمدفوعات الذكية", "حساب حارس الجراج", "لوحة التحكم والتقارير"],
      contactTitle: "تواصل معنا",
      address: "القاهرة، مدينة نصر، شارع عباس العقاد",
      hours: "السبت – الخميس · 9 ص – 6 م",
      copyright: "© 2026 باركي. جميع الحقوق محفوظة.",
      legal: ["سياسة الخصوصية", "الشروط والأحكام", "ملفات الارتباط"],
    },
    legal: {
      crumbHome: "الرئيسية",
      tocTitle: "محتويات الصفحة",
      helpTitle: "هل لديك استفسار؟",
      helpText: "فريقنا جاهز للرد على أي سؤال حول بياناتك أو حسابك.",
      pages: {
        cookies: {
          title: "سياسة ملفات الارتباط",
          updated: "آخر تحديث: 1 نوفمبر 2026",
          intro: "نستخدم ملفات الارتباط (الكوكيز) وتقنيات مشابهة لجعل موقعنا يعمل بشكل صحيح وتحسين تجربتك. توضح هذه الصفحة أنواعها وكيف يمكنك التحكم فيها.",
          sections: [
            { title: "ما هي ملفات الارتباط؟", text: "هي ملفات نصية صغيرة تُخزَّن على جهازك عند زيارة الموقع، وتساعدنا على تذكّر تفضيلاتك وفهم طريقة استخدامك للخدمة." },
            {
              title: "أنواع الملفات التي نستخدمها",
              lead: "نستخدم الأنواع التالية:",
              bullets: [
                "ملفات ضرورية: تُشغّل الموقع وتحافظ على تسجيل دخولك وأمان حسابك.",
                "ملفات الأداء والتحليلات: تقيس عدد الزيارات وتساعدنا على تحسين الصفحات.",
                "ملفات الوظائف: تحفظ تفضيلاتك مثل اللغة والمدينة.",
                "ملفات التسويق: تُستخدم فقط بموافقتك لعرض محتوى مناسب.",
              ],
            },
            { title: "كيف نستخدمها", text: "نستخدمها لتأمين الجلسات، وتذكّر نموذج طلب الشراكة غير المكتمل، وقياس أداء الصفحات، وتحسين سرعة الموقع وتجربة الاستخدام." },
            { title: "ملفات الأطراف الثالثة", text: "قد تضع بعض الخدمات الخارجية مثل أدوات التحليل أو الخرائط ملفات ارتباط خاصة بها، وتخضع لسياساتها. نختار شركاءنا بعناية ونطلب منهم الالتزام بمعايير حماية البيانات." },
            {
              title: "إدارة تفضيلاتك",
              text: "يمكنك قبول ملفات الارتباط أو رفضها من إعدادات المتصفح أو من شريط الموافقة عند زيارتك الأولى. لاحظ أن تعطيل الملفات الضرورية قد يؤثر على عمل بعض الخدمات.",
              bullets: [
                "اضبط إعدادات متصفحك لحظر الملفات أو حذفها.",
                "غيّر اختيارك في أي وقت من رابط «ملفات الارتباط» أسفل الصفحة.",
              ],
            },
            { title: "التحديثات والتواصل", text: "قد نحدّث هذه السياسة عند تغيّر التقنيات أو القوانين. لأي استفسار راسلنا على privacy@parky.app." },
          ],
        },
      },
    },
  },

  en: {
    pageTitle: "Parky | Turn your garage into a smarter business",
    langBtn: "ع",
    langLabel: "العربية",

    nav: ["Home", "About Parky", "Features", "Services", "How it works", "Contact us"],
    navDownload: "Download the app ⬇",
    navPartner: "Become a partner",

    hero: {
      label: "Smart parking partnership",
      title: "Turn your garage into a smarter business",
      text: "Join Parky and make your garage part of a smart parking network. Attract more customers, organize your garage operations, and track parking spots in real time from one place.",
      join: "Request to join",
      explore: "Explore our services",
      dashTitle: "Garage overview",
      live: "Live",
      occupancy: "Occupancy",
      available: "Available",
      total: "Total spots",
      note: "One dashboard.. full control of every spot.",
    },

    benefits: [
      { title: "More visibility", text: "Your garage reaches nearby drivers" },
      { title: "Easier management", text: "Track all your spots from one place" },
      { title: "Smarter decisions", text: "Rely on live occupancy data" },
    ],

    about: {
      title: "A smarter way to manage parking",
      lead: "Parky connects drivers with available parking spots and gives garage owners simple tools to manage spots, bookings, and entry through one smart platform.",
      steps: [
        { title: "Connected network", text: "Make your garage easier to find and book." },
        { title: "Digital entry", text: "Faster, easier entry using a QR code." },
        { title: "Clear management", text: "Follow occupancy and garage activity in real time." },
      ],
      note: "With Parky, your garage appears to drivers looking for a suitable spot, and bookings, occupancy, and digital entry are managed in one unified experience. Our goal is to cut search time and manual work, and help you follow your garage operations more clearly.",
    },

    features: {
      pill: "Parky features",
      title: "Everything you need to run your garage in one app",
      lead: "From guard management to online payments and the dashboard, Parky gives you full control and a smooth experience for you and your customers.",
      adminTag: "New · Guard account management",
      adminTitle: "Create your guards' accounts and control them yourself",
      adminText: "The garage owner creates each guard's account from the dashboard, sets their permissions, and suspends or removes them at any time without going back to Parky, while the guard receives cars and confirms bookings.",
      adminChecks: [
        "Create or remove a guard account and set permissions yourself",
        "Scan QR codes to log cars in and out in seconds",
        "Confirm bookings and track available spots live",
        "Full activity log for every shift to review performance easily",
      ],
      adminBtn: "Join as a partner and add your guards",
      guardName: "Ahmed Mahmoud",
      guardRole: "Garage guard · Morning shift",
      inService: "On duty",
      entriesToday: "Entries today",
      exitsToday: "Exits today",
      occupancy: "Occupancy",
      log1: "Entry · S K A 4821",
      log2: "Exit · G M D 3170",
      scanQr: "▦ Scan QR code",
      mini: [
        { title: "Live available spots", text: "The app shows the empty spots in your garage right now to reduce crowding and save drivers' time." },
        { title: "Fast QR entry", text: "A unique code for every booking, scanned at the gate to log entry and exit instantly." },
        { title: "Pre-booking & online payment", text: "Book your spot in advance and pay securely in the app, with no cash and no waiting at the gate." },
        { title: "Multiple team accounts", text: "Create guard accounts, remove them, and set their permissions yourself from one place." },
        { title: "Instant notifications", text: "Alerts for new bookings and expiring time, for you, the guard, and the driver at the same moment." },
        { title: "Dashboard & reports", text: "Follow occupancy, revenue, and peak hours in clear reports that help you make decisions." },
      ],
    },

    growth: {
      title: "Everything your garage needs to grow",
      sub: "A complete set of tools to simplify parking management and serve your customers.",
      items: [
        { title: "List your garage on the platform", text: "Show your garage's location, capacity, prices, and services to drivers looking for nearby parking." },
        { title: "Booking management", text: "Track new bookings, available spots, and entry and exit movement from one dashboard." },
        { title: "Smart entry and payments", text: "Make customer entry easy with QR codes, with support for online payments." },
      ],
    },

    why: {
      title: "Why do garage owners choose Parky?",
      sub: "Parky is not just a way to list your garage, it is a complete system to run your business smartly.",
      items: [
        { title: "Reach more customers", text: "Increase your garage's visibility to drivers looking for parking in your area." },
        { title: "Stay in control", text: "Follow available spots, bookings, and every detail of daily operations." },
        { title: "Track your performance", text: "Use clear reports that help you make better decisions for your business." },
      ],
    },

    start: {
      title: "Start your Parky partnership in 4 simple steps",
      steps: [
        { title: "Send your request", text: "Enter your details and your garage details in the form." },
        { title: "We contact you", text: "Our team reviews your request and gets in touch." },
        { title: "We agree on details", text: "We explain the services and discuss the cooperation steps." },
        { title: "Start with Parky", text: "Your garage joins the Parky network after approval and agreement." },
      ],
    },

    tech: {
      title: "Smart technology behind every parking spot",
      lead: "Parky combines the driver app, the owner management system, and smart garage technology, all working together in one integrated system.",
      items: [
        { title: "Live availability", text: "Know available spots instantly" },
        { title: "QR entry", text: "Organized, fast entry" },
        { title: "Owner dashboard", text: "Easy garage management" },
        { title: "Smart insights", text: "Understand usage patterns" },
      ],
    },

    join: {
      title: "Let your garage grow with Parky",
      text: "Want to join the Parky parking network? Send your details, and our partnerships team will review your request and contact you to discuss the details and next steps.",
      note: "Submitting a request does not mean a contract is finalized.",
      formTitle: "Partner request",
      formSub: "Tell us about your garage so we can get in touch.",
      fields: {
        fullName: { label: "Full name", ph: "Enter your name" },
        phone: { label: "Phone number", ph: "+20 1X XXX XXXX" },
        email: { label: "Email", ph: "name@example.com" },
        garageName: { label: "Garage name", ph: "Enter the garage name" },
        address: { label: "Garage address", ph: "Governorate, area, and street" },
        spots: { label: "Number of parking spots", ph: "e.g. 40" },
      },
      typeLabel: "Garage type",
      typePh: "Covered / Open",
      typeOptions: ["Covered", "Open"],
      submit: "Send partnership request",
      foot: "By submitting, you agree that the Parky team may contact you about your partnership request.",
      done: "Your request was sent successfully, we will contact you soon ✓",
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Does submitting a request mean a contract is final?", a: "No, submitting a request is only the first step. A contract is made after our team reviews it and agrees the details with you." },
        { q: "What happens after I submit the request?", a: "The partnerships team reviews your details and contacts you to discuss the details and next steps." },
        { q: "Can any garage apply?", a: "Owners of covered and open garages can apply, and the team evaluates each request by location and capacity." },
        { q: "What information is required to apply as a partner?", a: "Your basic details and your garage details: name, phone, email, address, number of spots, and garage type." },
        { q: "Do I need smart devices to get started?", a: "No, you can start with the app only, and smart technology can be added later based on your garage's needs." },
      ],
    },

    app: {
      title: "Download the Parky app",
      sub: "Everything you need to manage the parking experience in one app.",
      cardTitle: "Parky in your pocket",
      cardText: "Follow your garage bookings, monitor occupancy, and organize entry and exit easily from your phone.",
      checks: [
        "Track bookings and parking spot status",
        "Instant notifications and live updates",
        "Easier management from anywhere",
      ],
      ios: "iOS · App Store",
      android: "Android",
      qrTitle: "Scan the code to download",
      qrSub: "Point your phone camera at the code",
      qrDemo: "Demo code for preview",
      qrLink: "Available for iOS and Android",
      note: "We won't ask for any personal data just to download the app.",
    },

    guard: {
      crumbHome: "Home",
      title: "Guard account request",
      pill: "Owners only",
      heading: "Add your guard to Parky",
      text: "Want an account for your garage guard? Send the guard's details, and the Parky team will review the request and activate the account so they can start working from the guard app.",
      note: "The account is activated after the request is reviewed.",
      formSub: "Enter the guard's details so the Parky team can review the request and activate their account.",
      fields: {
        ownerName: { label: "Owner name", ph: "Enter your name" },
        ownerPhone: { label: "Owner phone number", ph: "+20 1X XXX XXXX" },
        ownerEmail: { label: "Email", ph: "name@example.com" },
        garageName: { label: "Garage name", ph: "Enter the garage name" },
        guardName: { label: "Guard's full name", ph: "Name as on the ID card" },
        guardPhone: { label: "Guard phone number", ph: "+20 1X XXX XXXX" },
        guardId: { label: "Guard national ID", ph: "14 digits" },
        shift: { label: "Shift", ph: "Morning / Evening / Full day" },
        startDate: { label: "Start date", ph: "" },
      },
      shiftOptions: ["Morning", "Evening", "Full day"],
      submit: "Send account request",
      foot: "By submitting, you agree that the Parky team may contact you about the guard account.",
      done: "Guard account request sent successfully ✓",
    },

    footer: {
      ctaTitle: "Ready to turn your garage into a smarter business?",
      ctaText: "Submit your partnership request now and the Parky team will contact you within 24 hours.",
      ctaBtn: "Become a partner",
      brand: "Parky is a smart platform that connects drivers with garage owners, simplifying booking, entry, payment, and parking management in one place.",
      quickTitle: "Quick links",
      quick: ["Home", "About Parky", "Features", "How it works", "FAQ"],
      servicesTitle: "Services",
      services: ["List your garage on the platform", "Booking management", "Smart entry and payments", "Garage guard account", "Dashboard and reports"],
      contactTitle: "Contact us",
      address: "Cairo, Nasr City, Abbas El Akkad St.",
      hours: "Sat – Thu · 9 AM – 6 PM",
      copyright: "© 2026 Parky. All rights reserved.",
      legal: ["Privacy policy", "Terms & conditions", "Cookie policy"],
    },
    legal: {
      crumbHome: "Home",
      tocTitle: "On this page",
      helpTitle: "Have a question?",
      helpText: "Our team is ready to answer any question about your data or account.",
      pages: {
        cookies: {
          title: "Cookie policy",
          updated: "Last updated: 1 November 2026",
          intro: "We use cookies and similar technologies to make our website work properly and improve your experience. This page explains their types and how you can control them.",
          sections: [
            { title: "What are cookies?", text: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you use the service." },
            {
              title: "Types of cookies we use",
              lead: "We use the following types:",
              bullets: [
                "Essential cookies: run the website and keep you signed in and your account secure.",
                "Performance and analytics cookies: measure the number of visits and help us improve pages.",
                "Functional cookies: save your preferences such as language and city.",
                "Marketing cookies: used only with your consent to show relevant content.",
              ],
            },
            { title: "How we use them", text: "We use them to secure sessions, remember an incomplete partnership request form, measure page performance, and improve site speed and user experience." },
            { title: "Third-party cookies", text: "Some external services, such as analytics tools or maps, may set their own cookies, which are subject to their own policies. We choose our partners carefully and ask them to follow data protection standards." },
            {
              title: "Managing your preferences",
              text: "You can accept or reject cookies from your browser settings or from the consent banner on your first visit. Note that disabling essential cookies may affect how some services work.",
              bullets: [
                "Adjust your browser settings to block or delete cookies.",
                "Change your choice at any time from the “Cookie policy” link at the bottom of the page.",
              ],
            },
            { title: "Updates and contact", text: "We may update this policy when technologies or laws change. For any inquiry, write to us at privacy@parky.app." },
          ],
        },
      },
    },
  },
};

export default content;
