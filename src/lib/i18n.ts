export type Language = "en" | "ar";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      ctaPrimary: "View Menu",
      ctaSecondary: "Find Us",
    },
    menu: {
      categories: {
        "Saudi Qahwa": "Saudi Qahwa",
        Espresso: "Espresso",
        "Cold Brew": "Cold Brew",
        Desserts: "Desserts",
        Breakfast: "Breakfast",
      },
    },
    contact: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send Message",
    },
    toggle: {
      en: "EN",
      ar: "AR",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن القهوة",
      menu: "المنيو",
      gallery: "المعرض",
      contact: "تواصل",
    },
    hero: {
      ctaPrimary: "عرض المنيو",
      ctaSecondary: "اعثر علينا",
    },
    menu: {
      categories: {
        "Saudi Qahwa": "قهوة سعودية",
        Espresso: "إسبريسو",
        "Cold Brew": "كولد برو",
        Desserts: "حلويات",
        Breakfast: "فطور",
      },
    },
    contact: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "رسالتك",
      submit: "إرسال",
    },
    toggle: {
      en: "EN",
      ar: "عربى",
    },
  },
} as const;
