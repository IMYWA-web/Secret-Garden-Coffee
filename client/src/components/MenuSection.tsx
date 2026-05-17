/* =============================================================================
   MENU SECTION — Secret Garden Coffee
   Design: Analog Warmth Botanical — editorial broadsheet menu layout
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const COFFEE_DRINKS_IMG = "/menu.png";
const MENU_1_IMG = "/menu1.jpeg";
const MENU_2_IMG = "/menu2.jpeg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "French Coffee",
    items: [
      { name: "Americano", description: "Espresso with hot water", price: "$2.00" },
      { name: "Teramisu Latte", description: "Rich teramisu flavor with milk", price: "$3.50" },
      { name: "Caramel Macchiato", description: "Espresso with caramel and steamed milk", price: "$2.75" },
      { name: "Ice Latte", description: "Espresso over ice with cold milk", price: "$2.50" },
      { name: "Expresso Macchiato", description: "Espresso marked with milk foam", price: "$2.50" },
      { name: "Mocha", description: "Chocolate flavored coffee", price: "$2.50" },
      { name: "Espresso", description: "Bold and aromatic", price: "$2.00" },
      { name: "Cappuccino", description: "Espresso, steamed milk, thick foam", price: "$2.50" },
      { name: "Hot Mocha", description: "Warm chocolate flavored coffee", price: "$2.25" },
    ],
  },
  {
    category: "French Matcha",
    items: [
      { name: "Pure Matcha", description: "High quality green tea", price: "$2.25" },
      { name: "Espresso Matcha", description: "Matcha green tea with espresso", price: "$2.70" },
      { name: "Matcha Latte", description: "Matcha with steamed milk", price: "$2.50" },
      { name: "Matcha Honey", description: "Matcha sweetened with honey", price: "$2.25" },
      { name: "Matcha Strawberry Latte", description: "Matcha and strawberry with milk", price: "$2.75" },
      { name: "Matcha Coconut", description: "Matcha infused with coconut", price: "$2.75" },
      { name: "Matcha Honey Lemon Soda", description: "Refreshing matcha with honey and lemon", price: "$2.50" },
      { name: "Matcha Frappe", description: "Blended ice matcha drink", price: "$2.50" },
    ],
  },
  {
    category: "Signature",
    items: [
      { name: "Tiramisu coffee", description: "Signature tiramisu flavored coffee", price: "$3.50", tag: "Signature" },
      { name: "Iced cacao", description: "Cold chocolate beverage", price: "$3.75" },
      { name: "Galaxy mix soda drink", description: "Colorful refreshing soda", price: "$3.25", tag: "Popular" },
      { name: "Iced black Honey", description: "Iced black coffee with honey", price: "$3.75" },
      { name: "Coconut matcha", description: "Cold coconut milk and matcha", price: "$2.75" },
      { name: "Iced cream Latte", description: "Iced latte topped with cream", price: "$3.50" },
      { name: "Blueberry Matcha", description: "Matcha combined with blueberry", price: "$3.50" },
    ],
  },
  {
    category: "Italian Soda",
    items: [
      { name: "Passion Soda", description: "Passion fruit flavored Italian soda", price: "$2.50" },
      { name: "Strawberry Soda", description: "Strawberry flavored Italian soda", price: "$2.50" },
      { name: "Blue Curacao Soda", description: "Blue curacao flavored Italian soda", price: "$2.50" },
      { name: "Blueberry Soda", description: "Blueberry flavored Italian soda", price: "$2.50" },
      { name: "Kiwi Soda", description: "Kiwi flavored Italian soda", price: "$2.50" },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between py-3.5 border-b border-[#1C2E1A]/10 group hover:bg-[#1C2E1A]/5 px-2 -mx-2 transition-colors duration-200">
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-body font-semibold text-[#1C2E1A] text-base">{item.name}</span>
          {item.tag && (
            <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#A64E2F] border border-[#A64E2F]/50 px-2 py-0.5">
              {item.tag}
            </span>
          )}
        </div>
        <p className="font-body text-[#1C2E1A]/55 text-sm italic mt-0.5">{item.description}</p>
      </div>
      <span className="font-mono-label text-[#A64E2F] text-sm whitespace-nowrap mt-0.5">{item.price}</span>
    </div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-[#FAF7EE]">
      <div className="container">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-label">
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#A64E2F]">{t("menu.label")}</span>
          </div>
          <h2 className="font-display text-[#1C2E1A] text-5xl md:text-6xl">{t("menu.title")}</h2>
          <p className="font-body italic text-[#1C2E1A]/55 mt-3 max-w-md text-lg">
            {t("menu.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: featured images */}
          <div className={`lg:col-span-1 space-y-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={COFFEE_DRINKS_IMG}
                alt="Coffee drinks"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C2E1A]/80 to-transparent p-4">
                <span className="font-display text-[#EDE5D0] text-2xl">{t("menu.gardenBrews")}</span>
                <p className="font-mono-label text-[#C8722A] text-xs tracking-wider mt-1">{t("menu.freshlyMade")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden aspect-square">
                <img src={MENU_1_IMG} alt="Menu Page 1" className="w-full h-full object-cover" />
              </div>
              <div className="relative overflow-hidden aspect-square">
                <img src={MENU_2_IMG} alt="Menu Page 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: menu list */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-[#1C2E1A]/15 pb-4">
              {menuData.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(i)}
                  className={`font-mono-label text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200 ${
                    activeTab === i
                      ? "bg-[#1C2E1A] text-[#EDE5D0]"
                      : "text-[#1C2E1A]/60 hover:text-[#A64E2F] border border-[#1C2E1A]/20 hover:border-[#A64E2F]"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Menu items */}
            <div>
              <h3 className="font-display text-[#1C2E1A] text-2xl mb-4">{menuData[activeTab].category}</h3>
              <div>
                {menuData[activeTab].items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </div>

            {/* Price note */}
            <div className="mt-8 p-4 border border-[#1C2E1A]/15 bg-[#EDE5D0]/50">
              <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#1C2E1A]/50">
                {t("menu.priceNote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
