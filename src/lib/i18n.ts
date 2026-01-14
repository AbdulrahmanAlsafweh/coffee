export type Language = "en" | "ar";

export const translations = {
  en: {
    brand: {
      name: "Qahwa Najd",
      location: "Saudi Arabia",
    },
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
    },
    common: {
      skipToContent: "Skip to content",
      menu: "Menu",
      close: "Close",
      currency: "SAR",
    },
    hero: {
      eyebrow: "Qahwa Najd - Saudi Arabia",
      title: "Saudi coffee culture refined into a modern, premium ritual.",
      description:
        "Crafted in Riyadh, Qahwa Najd celebrates Najdi hospitality with light roasts, aromatic spices, and ceremonial presentation.",
      ctaPrimary: "View Menu",
      ctaSecondary: "Find Us",
      heroAlt: "Signature Saudi Qahwa service",
    },
    home: {
      signature: {
        eyebrow: "Signature Ritual",
        title: "Saudi Qahwa Experience",
        description:
          "An elegant ritual shaped by cardamom, saffron, and dates - served with quiet ceremony.",
        cards: {
          cardamom: {
            title: "Cardamom",
            description: "A refined aromatic note that defines the Najdi pour.",
          },
          saffron: {
            title: "Saffron",
            description: "Golden depth that elevates the ceremonial aroma.",
          },
          dates: {
            title: "Dates",
            description: "A natural sweetness that completes the ritual.",
          },
        },
      },
      featured: {
        eyebrow: "Featured Selection",
        title: "Curated signature drinks",
        description:
          "A rotating edit of our most celebrated qahwa, espresso, and cold brew creations.",
      },
      testimonials: {
        eyebrow: "Voices",
        title: "Testimonials from Saudi coffee lovers",
        description:
          "A few words from collaborators and community members who value the Najdi ritual.",
      },
      story: {
        eyebrow: "Our Story",
        title: "A portfolio brand rooted in Najdi hospitality",
        description:
          "From sourcing to roasting, every detail honors Saudi culture while embracing modern elegance.",
        cta: "Discover the story",
        interiorAlt: "Qahwa Najd interior",
      },
    },
    about: {
      intro: {
        eyebrow: "Our Heritage",
        title: "Najdi hospitality, poured with intention",
        description:
          "Qahwa Najd is a portfolio brand rooted in Saudi Arabia, crafted to honor heritage rituals through modern specialty coffee.",
        paragraphs: [
          "We source bright, lightly roasted beans and blend them with cardamom, saffron, and subtle smoke notes inspired by the Najd region.",
          "Our roasting philosophy emphasizes clarity and aroma, preserving the delicate spice trail that makes Saudi qahwa unmistakable.",
          "Every detail - from the dallah to the date tray - is designed to feel ceremonial, refined, and unmistakably Saudi.",
        ],
        imageAlt: "Saudi coffee hospitality setup",
      },
      timeline: {
        eyebrow: "Timeline",
        title: "From Najdi roots to modern ritual",
        description: "The milestones that shaped the Qahwa Najd experience.",
      },
      values: {
        eyebrow: "Values",
        title: "Principles that guide every pour",
        description: "A balance of heritage, craftsmanship, and human connection.",
      },
      team: {
        eyebrow: "Team",
        title: "The minds behind the ritual",
        description: "A small group of Saudi creatives crafting a premium coffee identity.",
      },
    },
    menu: {
      eyebrow: "Menu",
      title: "A curated Saudi coffee menu",
      description:
        "Explore qahwa rituals, espresso interpretations, and Najdi-inspired comfort dishes.",
      categoriesLabel: "Menu categories",
      cart: "Cart",
      viewDetails: "View details",
      addToOrder: "Add to Order",
      categories: {
        "Saudi Qahwa": "Saudi Qahwa",
        Espresso: "Espresso",
        "Cold Brew": "Cold Brew",
        Desserts: "Desserts",
        Breakfast: "Breakfast",
      },
      badges: {
        Vegan: "Vegan",
        "Gluten-Free": "Gluten-Free",
      },
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Saudi coffee culture in motion",
      description:
        "A visual story of qahwa rituals, interiors, and Najdi-inspired details.",
      lightboxLabel: "Gallery lightbox",
      openImage: "Open image",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start a Saudi coffee collaboration",
      description: "Reach out for partnerships, private tastings, or portfolio inquiries.",
      name: "Name",
      phone: "Phone",
      message: "Message",
      submit: "Send Message",
      statusSuccess: "Message sent. We'll be in touch within 24 hours.",
      errors: {
        name: "Please enter your name.",
        phone: "Enter a valid phone number.",
        message: "Message should be at least 10 characters.",
      },
      storeInfo: "Store Information",
      address: "King Fahd District, Riyadh, Saudi Arabia",
      copy: "Copy",
      toastCopied: "Phone number copied.",
      toastFailed: "Unable to copy. Please copy manually.",
      hours: "Business Hours",
      hoursList: [
        "Sunday - Thursday: 7:00 AM - 10:00 PM",
        "Friday: 2:00 PM - 12:00 AM",
        "Saturday: 9:00 AM - 12:00 AM",
      ],
    },
    footer: {
      description:
        "Specialty Saudi coffee portfolio highlighting cultural rituals, modern craft, and sensory hospitality.",
      quickLinks: "Quick Links",
      newsletter: "Newsletter",
      newsletterDescription:
        "Join the Qahwa Najd circle for seasonal roasts and cultural events.",
      emailPlaceholder: "Email address",
      subscribe: "Subscribe",
      subscribeSuccess: "Thanks for subscribing. We'll keep you posted.",
      subscribeError: "Please enter a valid email.",
      copyright: "(c) 2026 Qahwa Najd. Saudi Arabia.",
      developedBy: "Developed by abdulrahman.dev",
      developedByLabel: "Developed by abdulrahman.dev on WhatsApp",
    },
    toggle: {
      en: "EN",
      ar: "AR",
    },
  },
  ar: {
    brand: {
      name: "قهوة نجد",
      location: "السعودية",
    },
    nav: {
      home: "الرئيسية",
      about: "عن القهوة",
      menu: "المنيو",
      gallery: "المعرض",
      contact: "تواصل",
    },
    common: {
      skipToContent: "تخطي إلى المحتوى",
      menu: "القائمة",
      close: "إغلاق",
      currency: "ر.س",
    },
    hero: {
      eyebrow: "قهوة نجد - السعودية",
      title: "ثقافة القهوة السعودية بصياغة عصرية وفاخرة.",
      description:
        "مصنوعة في الرياض، تحتفي قهوة نجد بكرم الضيافة النجدية مع تحميص خفيف وتوابل عطرية وتقديم احتفالي.",
      ctaPrimary: "عرض المنيو",
      ctaSecondary: "اعثر علينا",
      heroAlt: "تقديم قهوة سعودية مميزة",
    },
    home: {
      signature: {
        eyebrow: "الطقس المميز",
        title: "تجربة القهوة السعودية",
        description: "طقس أنيق يتشكل من الهيل والزعفران والتمر ويقدم بهدوء.",
        cards: {
          cardamom: {
            title: "الهيل",
            description: "لمسة عطرية راقية تحدد طابع القهوة النجدية.",
          },
          saffron: {
            title: "الزعفران",
            description: "عمق عطري ذهبي يرفع رقي الطقس.",
          },
          dates: {
            title: "التمر",
            description: "حلاوة طبيعية تكمل نكهة القهوة.",
          },
        },
      },
      featured: {
        eyebrow: "مختارات مميزة",
        title: "اختيارات من مشروباتنا المميزة",
        description:
          "تشكيلة متجددة من القهوة السعودية والإسبريسو والكولد برو.",
      },
      testimonials: {
        eyebrow: "آراء",
        title: "شهادات من عشاق القهوة السعودية",
        description:
          "كلمات من شركائنا وروادنا الذين يقدرون الطقس النجدي.",
      },
      story: {
        eyebrow: "قصتنا",
        title: "علامة ترتكز على الضيافة النجدية",
        description:
          "من التوريد إلى التحميص، كل تفصيل يكرم الثقافة السعودية بأسلوب حديث.",
        cta: "اكتشف القصة",
        interiorAlt: "تصميم داخلي لقهوة نجد",
      },
    },
    about: {
      intro: {
        eyebrow: "إرثنا",
        title: "ضيافة نجدية تسكب بقصد",
        description:
          "قهوة نجد علامة ملف أعمال سعودية، صممت لتكريم الطقوس التراثية بقهوة مختصة عصرية.",
        paragraphs: [
          "نختار حبوبا زاهية التحميص الخفيف ونمزجها بالهيل والزعفران ولمسات دخان مستوحاة من نجد.",
          "فلسفتنا في التحميص تركز على الوضوح والعطر للحفاظ على أثر التوابل الرقيق الذي يميز القهوة السعودية.",
          "كل تفصيلة - من الدلة إلى صحن التمر - صممت لتكون احتفالية وراقية وذات هوية سعودية.",
        ],
        imageAlt: "جلسة ضيافة للقهوة السعودية",
      },
      timeline: {
        eyebrow: "الخط الزمني",
        title: "من جذور نجد إلى الطقس المعاصر",
        description: "محطات شكلت تجربة قهوة نجد.",
      },
      values: {
        eyebrow: "قيمنا",
        title: "مبادئ تقود كل فنجان",
        description: "توازن بين الإرث والحرفية والاتصال الإنساني.",
      },
      team: {
        eyebrow: "الفريق",
        title: "العقول خلف الطقس",
        description: "مجموعة سعودية صغيرة تصوغ هوية قهوة فاخرة.",
      },
    },
    menu: {
      eyebrow: "المنيو",
      title: "منيو قهوة سعودية مختارة",
      description:
        "اكتشف طقوس القهوة السعودية وتفسيرات الإسبريسو وأطباقا مستوحاة من نجد.",
      categoriesLabel: "فئات المنيو",
      cart: "السلة",
      viewDetails: "عرض التفاصيل",
      addToOrder: "أضف للطلب",
      categories: {
        "Saudi Qahwa": "قهوة سعودية",
        Espresso: "إسبريسو",
        "Cold Brew": "كولد برو",
        Desserts: "حلويات",
        Breakfast: "فطور",
      },
      badges: {
        Vegan: "نباتي",
        "Gluten-Free": "خالٍ من الغلوتين",
      },
    },
    gallery: {
      eyebrow: "المعرض",
      title: "ثقافة القهوة السعودية في صور",
      description: "حكاية بصرية لطقوس القهوة والتفاصيل النجدية.",
      lightboxLabel: "عارض الصور",
      openImage: "افتح الصورة",
    },
    contact: {
      eyebrow: "تواصل",
      title: "ابدأ تعاون قهوة سعودي",
      description: "للتعاونات وتجارب التذوق الخاصة واستفسارات ملف الأعمال.",
      name: "الاسم",
      phone: "الهاتف",
      message: "رسالتك",
      submit: "إرسال",
      statusSuccess: "تم إرسال الرسالة. سنعود لك خلال 24 ساعة.",
      errors: {
        name: "يرجى إدخال الاسم.",
        phone: "يرجى إدخال رقم هاتف صحيح.",
        message: "يجب أن تكون الرسالة 10 أحرف على الأقل.",
      },
      storeInfo: "معلومات المتجر",
      address: "حي الملك فهد، الرياض، السعودية",
      copy: "نسخ",
      toastCopied: "تم نسخ رقم الهاتف.",
      toastFailed: "تعذر النسخ. يرجى النسخ يدويا.",
      hours: "ساعات العمل",
      hoursList: [
        "الأحد - الخميس: 7:00 ص - 10:00 م",
        "الجمعة: 2:00 م - 12:00 ص",
        "السبت: 9:00 ص - 12:00 ص",
      ],
    },
    footer: {
      description:
        "ملف أعمال لقهوة سعودية متخصصة يبرز الطقوس الثقافية والحرفية الحديثة.",
      quickLinks: "روابط سريعة",
      newsletter: "النشرة البريدية",
      newsletterDescription:
        "انضم إلى دائرة قهوة نجد للأصناف الموسمية والفعاليات الثقافية.",
      emailPlaceholder: "البريد الإلكتروني",
      subscribe: "اشترك",
      subscribeSuccess: "شكرا لاشتراكك. سنوافيك بكل جديد.",
      subscribeError: "يرجى إدخال بريد إلكتروني صحيح.",
      copyright: "(c) 2026 قهوة نجد. السعودية.",
      developedBy: "تم التطوير بواسطة abdulrahman.dev",
      developedByLabel: "تم التطوير بواسطة abdulrahman.dev عبر واتساب",
    },
    toggle: {
      en: "EN",
      ar: "عربى",
    },
  },
} as const;

export type Translations = (typeof translations)[Language];
