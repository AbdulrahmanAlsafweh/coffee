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
  description: string;
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
    description: "Light roasted coffee infused with cardamom and saffron.",
    price: 24,
    category: "Saudi Qahwa",
    image: "/images/qahwa-1.svg",
    badges: ["Vegan"],
  },
  {
    id: "qahwa-dates",
    name: "Dates & Clove",
    description: "Traditional qahwa paired with date syrup and clove aroma.",
    price: 26,
    category: "Saudi Qahwa",
    image: "/images/qahwa-2.svg",
    badges: ["Vegan", "Gluten-Free"],
  },
  {
    id: "espresso-gold",
    name: "Golden Espresso",
    description: "Silky espresso with a touch of tahini sweetness.",
    price: 22,
    category: "Espresso",
    image: "/images/espresso-1.svg",
  },
  {
    id: "latte-sand",
    name: "Sand Latte",
    description: "Velvet milk latte finished with date-brown sugar.",
    price: 24,
    category: "Espresso",
    image: "/images/espresso-2.svg",
  },
  {
    id: "coldbrew-cardamom",
    name: "Cardamom Cold Brew",
    description: "Slow-steeped cold brew kissed with green cardamom.",
    price: 26,
    category: "Cold Brew",
    image: "/images/coldbrew-1.svg",
    badges: ["Vegan"],
  },
  {
    id: "coldbrew-date",
    name: "Date Cream Cold Brew",
    description: "Creamy cold brew topped with whipped date cream.",
    price: 28,
    category: "Cold Brew",
    image: "/images/coldbrew-2.svg",
  },
  {
    id: "dessert-basbousa",
    name: "Basbousa Bliss",
    description: "Semolina cake with saffron syrup and pistachio.",
    price: 18,
    category: "Desserts",
    image: "/images/dessert-1.svg",
  },
  {
    id: "dessert-date-tart",
    name: "Date Tart",
    description: "Butter crust tart layered with caramelized dates.",
    price: 20,
    category: "Desserts",
    image: "/images/dessert-2.svg",
  },
  {
    id: "breakfast-labneh",
    name: "Labneh Morning Board",
    description: "Creamy labneh, zaatar, olive oil, and warm flatbread.",
    price: 32,
    category: "Breakfast",
    image: "/images/breakfast-1.svg",
  },
  {
    id: "breakfast-eggs",
    name: "Najd Sunrise Plate",
    description: "Soft eggs, dates, olives, and grilled halloumi.",
    price: 36,
    category: "Breakfast",
    image: "/images/breakfast-2.svg",
    badges: ["Gluten-Free"],
  },
];

export const featuredItems = menuItems.slice(0, 6);
