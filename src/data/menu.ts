import { media } from "@/data/media";

export type MenuCategory =
  | "Saudi Qahwa"
  | "Espresso"
  | "Cold Brew"
  | "Desserts"
  | "Breakfast";

export type DietaryBadge = "Vegan" | "Gluten-Free";

export type MenuItem = {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  category: MenuCategory;
  image: string;
  badges?: DietaryBadge[];
};

export const menuCategories: MenuCategory[] = [
  "Saudi Qahwa",
  "Espresso",
  "Cold Brew",
  "Desserts",
  "Breakfast",
];

export const menuItems: MenuItem[] = [
  {
    id: "qahwa-classic",
    name: "Najdi Qahwa",
    nameAr: "قهوة نجد",
    description: "Light roasted coffee infused with cardamom and saffron.",
    descriptionAr: "قهوة محمصة خفيفة منقوعة بالهيل والزعفران.",
    price: 24,
    category: "Saudi Qahwa",
    image: media.menu.qahwa1,
    badges: ["Vegan"],
  },
  {
    id: "qahwa-dates",
    name: "Dates & Clove",
    nameAr: "تمر وقرنفل",
    description: "Traditional qahwa paired with date syrup and clove aroma.",
    descriptionAr: "قهوة سعودية تقليدية مع شراب تمر ورائحة القرنفل.",
    price: 26,
    category: "Saudi Qahwa",
    image: media.menu.qahwa2,
    badges: ["Vegan", "Gluten-Free"],
  },
  {
    id: "espresso-gold",
    name: "Golden Espresso",
    nameAr: "إسبريسو ذهبي",
    description: "Silky espresso with a touch of tahini sweetness.",
    descriptionAr: "إسبريسو ناعم مع لمسة حلاوة الطحينة.",
    price: 22,
    category: "Espresso",
    image: media.menu.espresso1,
  },
  {
    id: "latte-sand",
    name: "Sand Latte",
    nameAr: "لاتيه الرمال",
    description: "Velvet milk latte finished with date-brown sugar.",
    descriptionAr: "لاتيه بالحليب المخملي مع سكر التمر البني.",
    price: 24,
    category: "Espresso",
    image: media.menu.espresso2,
  },
  {
    id: "coldbrew-cardamom",
    name: "Cardamom Cold Brew",
    nameAr: "كولد برو بالهيل",
    description: "Slow-steeped cold brew kissed with green cardamom.",
    descriptionAr: "كولد برو منقوع ببطء مع لمسة من الهيل الأخضر.",
    price: 26,
    category: "Cold Brew",
    image: media.menu.coldbrew1,
    badges: ["Vegan"],
  },
  {
    id: "coldbrew-date",
    name: "Date Cream Cold Brew",
    nameAr: "كولد برو بكريمة التمر",
    description: "Creamy cold brew topped with whipped date cream.",
    descriptionAr: "كولد برو كريمي يعلوه رغوة كريمة التمر.",
    price: 28,
    category: "Cold Brew",
    image: media.menu.coldbrew2,
  },
  {
    id: "dessert-basbousa",
    name: "Basbousa Bliss",
    nameAr: "بسبوسة فاخرة",
    description: "Semolina cake with saffron syrup and pistachio.",
    descriptionAr: "كيك سميد مع شراب الزعفران والفستق.",
    price: 18,
    category: "Desserts",
    image: media.menu.dessert1,
  },
  {
    id: "dessert-date-tart",
    name: "Date Tart",
    nameAr: "تارت التمر",
    description: "Butter crust tart layered with caramelized dates.",
    descriptionAr: "تارت بقشرة زبدية محشو بتمر مكرمل.",
    price: 20,
    category: "Desserts",
    image: media.menu.dessert2,
  },
  {
    id: "breakfast-labneh",
    name: "Labneh Morning Board",
    nameAr: "لوح لبنة الصباح",
    description: "Creamy labneh, zaatar, olive oil, and warm flatbread.",
    descriptionAr: "لبنة كريمية مع زعتر وزيت زيتون وخبز دافئ.",
    price: 32,
    category: "Breakfast",
    image: media.menu.breakfast1,
  },
  {
    id: "breakfast-eggs",
    name: "Najd Sunrise Plate",
    nameAr: "طبق شروق نجد",
    description: "Soft eggs, dates, olives, and grilled halloumi.",
    descriptionAr: "بيض طري مع تمر وزيتون وحلوم مشوي.",
    price: 36,
    category: "Breakfast",
    image: media.menu.breakfast2,
    badges: ["Gluten-Free"],
  },
];

export const featuredItems = menuItems.slice(0, 6);
