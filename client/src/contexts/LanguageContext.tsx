import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "km";

const translations = {
  // Navbar
  "nav.home": { en: "Home", km: "ទំព័រដើម" },
  "nav.menu": { en: "Menu", km: "មុនុយ" },
  "nav.story": { en: "Our Story", km: "រឿងរបស់យើង" },
  "nav.reviews": { en: "Reviews", km: "ការវាយតម្លៃ" },
  "nav.visit": { en: "Visit Us", km: "មកទស្សនា" },
  "nav.findUs": { en: "Find Us", km: "ទីតាំងរបស់យើង" },

  // Hero
  "hero.subtitle": { en: "Coffee Shop", km: "ហាងកាហ្វេ" },
  "hero.tagline": {
    en: "A hidden botanical sanctuary in the heart of Phnom Penh. Warm, cozy, and surrounded by beautiful greenery.",
    km: "កន្លែងសម្រាកកណ្តាលក្រុងភ្នំពេញ។ កក់ក្តៅ និងជុំវិញដោយបៃតងស្រស់ស្អាត។",
  },
  "hero.open": { en: "Open", km: "បើក" },
  "hero.closed": { en: "Closed", km: "បិទ" },
  "hero.hours": { en: "8 AM – 7 PM · $1–10 per person", km: "8 ព្រឹក – 7 ល្ងាច · $1–10 ក្នុងមួយនាក់" },
  "hero.viewMenu": { en: "View Menu", km: "មើលមុនុយ" },
  "hero.scroll": { en: "Scroll", km: "រំកិល" },
  "hero.googleReviews": { en: "4.4 · 74 Google Reviews", km: "4.4 · 74 ការវាយតម្លៃ Google" },

  // Feature Strip
  "feat.coffee": { en: "Specialty Coffee", km: "កាហ្វេពិសេស" },
  "feat.coffeeDesc": { en: "Freshly brewed daily", km: "ចម្រាញ់រាល់ថ្ងៃ" },
  "feat.garden": { en: "Garden Ambiance", km: "បរិយាកាសថវិកា" },
  "feat.gardenDesc": { en: "Lush botanical setting", km: "បរិស្ថានបៃតង" },
  "feat.location": { en: "Phnom Penh", km: "ភ្នំពេញ" },
  "feat.locationDesc": { en: "HRGQ+5W6 · Easy to find", km: "HRGQ+5W6 · ងាយស្រួលរក" },
  "feat.open": { en: "Open Daily", km: "បើករាល់ថ្ងៃ" },
  "feat.openDesc": { en: "Until 7 PM every day", km: "រហូតដល់ម៉ោង 7 ល្ងាច" },

  // Menu
  "menu.label": { en: "What We Serve", km: "អ្វីដែលយើងបម្រើ" },
  "menu.title": { en: "Our Menu", km: "មុនុយរបស់យើង" },
  "menu.subtitle": { en: "Crafted with care, served in our garden. Every cup tells a story.", km: "ផលិតដោយយកចិត្តទុកដាក់។ កែវនីមួយៗមានរឿងដែលត្រូវប្រាប់។" },
  "menu.priceNote": { en: "* Prices in USD. Approx. $1–10 per person. Dine-in · Outdoor seating · Takeaway available.", km: "* តម្លៃជា USD។ ប្រមាណ $1–10 ក្នុងមួយនាក់។ អង្គុយក្នុង · អង្គុយក្រៅ · យកទៅផ្ទះ។" },
  "menu.gardenBrews": { en: "Garden Brews", km: "ភេសជ្ជៈសួន" },
  "menu.freshlyMade": { en: "Freshly Made Daily", km: "ធ្វើថ្មីរាល់ថ្ងៃ" },

  // Story
  "story.label": { en: "Our Story", km: "រឿងរបស់យើង" },
  "story.title1": { en: "A Hidden", km: "កន្លែង" },
  "story.title2": { en: "Sanctuary", km: "សម្រាក" },
  "story.p1": {
    en: "Secret Garden Coffee isn't just a café — it's a place to breathe. Nestled in the heart of Phnom Penh, we've created a lush botanical retreat where time slows down and every sip feels like a small escape.",
    km: "Secret Garden Coffee មិនមែនគ្រាន់តែជាហាងកាហ្វេទេ — វាជាកន្លែងសម្រាក។ ស្ថិតនៅកណ្តាលក្រុងភ្នំពេញ យើងបានបង្កើតកន្លែងបៃតងដែលពេលវេលាយឺតចុះ។",
  },
  "story.quote": {
    en: "\"Lovely coffee spot with a warm and relaxing vibe! The place feels cozy yet stylish, with beautiful greenery and thoughtful design that makes you feel relax.\"",
    km: "\"ហាងកាហ្វេស្រស់ស្អាត មានបរិយាកាសកក់ក្តៅ! កន្លែងនេះមានអារម្មណ៍ផាសុកភាព ជុំវិញដោយបៃតង និងការរចនាដ៏ល្អ។\"",
  },
  "story.h1": { en: "Lush Greenery", km: "បៃតងស្រស់" },
  "story.h1d": { en: "Surrounded by tropical plants and climbing vines", km: "ជុំវិញដោយរុក្ខជាតិត្រូពិក" },
  "story.h2": { en: "Cozy & Stylish", km: "ផាសុកភាព" },
  "story.h2d": { en: "Thoughtful design that makes you feel at ease", km: "ការរចនាដែលធ្វើឲ្យអ្នកមានអារម្មណ៍ស្រួល" },
  "story.h3": { en: "Bridgerton Vibe", km: "បរិយាកាស Bridgerton" },
  "story.h3d": { en: "Romantic garden atmosphere loved by our guests", km: "បរិយាកាorg សួនដ៏មានមនោសញ្ចេតនា" },
  "story.visitUs": { en: "Visit Us", km: "មកទស្សនា" },
  "story.googleRating": { en: "Google Rating", km: "ការវាយតម្លៃ Google" },
  "story.reviews": { en: "74 Reviews", km: "74 ការវាយតម្លៃ" },

  // Reviews
  "reviews.label": { en: "What Guests Say", km: "ការនិយាយរបស់ភ្ញៀវ" },
  "reviews.title": { en: "Reviews", km: "ការវាយតម្លៃ" },
  "reviews.based": { en: "Based on 74 Google reviews", km: "ផ្អែកលើ 74 ការវាយតម្លៃ Google" },
  "reviews.mentioned": { en: "Mentioned Often", km: "រឿយៗត្រូវបានលើក" },
  "reviews.viewAll": { en: "View All 74 Reviews on Google Maps", km: "មើលការវាយតម្លៃទាំង 74 នៅ Google Maps" },

  // Visit
  "visit.label": { en: "Find Us", km: "ទីតាំងរបស់យើង" },
  "visit.title": { en: "Visit Us", km: "មកទស្សនា" },
  "visit.subtitle": { en: "Come find our hidden garden in the heart of Phnom Penh.", km: "មករកសួនលាក់កំបាំងរបស់យើងនៅកណ្តាលក្រុងភ្នំពេញ។" },
  "visit.address": { en: "Address", km: "អាសយដ្ឋាន" },
  "visit.phone": { en: "Phone", km: "ទូរស័ព្ទ" },
  "visit.openingHours": { en: "Opening Hours", km: "ម៉ោងបើកដំណើរការ" },
  "visit.today": { en: "Today", km: "ថ្ងៃនេះ" },
  "visit.services": { en: "Services", km: "សេវាកម្ម" },
  "visit.dineIn": { en: "Dine-in", km: "អង្គុយក្នុង" },
  "visit.outdoor": { en: "Outdoor Seating", km: "អង្គុយក្រៅ" },
  "visit.takeaway": { en: "Takeaway", km: "យកទៅ" },
  "visit.loading": { en: "Loading map...", km: "កំពុងផ្ទុកផែនទី..." },

  // Footer
  "footer.quickLinks": { en: "Quick Links", km: "តំណរហ័ស" },
  "footer.contact": { en: "Contact & Hours", km: "ទំនាក់ទំនង និងម៉ោង" },
  "footer.openDaily": { en: "Open Daily", km: "បើករាល់ថ្ងៃ" },
  "footer.rights": { en: "© 2026 Secret Garden Coffee Shop. All rights reserved.", km: "© 2026 Secret Garden Coffee Shop។ រក្សាសិទ្ធិគ្រប់យ៉ាង។" },
  "footer.desc": {
    en: "A hidden botanical sanctuary in the heart of Phnom Penh. Warm, cozy, and surrounded by beautiful greenery.",
    km: "កន្លែងសម្រាកកណ្តាលក្រុងភ្នំពេញ។ កក់ក្តៅ និងជុំវិញដោយបៃតងស្រស់ស្អាត។",
  },
  "footer.priceRange": { en: "Phnom Penh, Cambodia · $1–10 per person", km: "ភ្នំពេញ កម្ពុជា · $1–10 ក្នុងមួយនាក់" },

  // Mobile menu
  "mobile.info": { en: "if you need more information", km: "បើអ្នកត្រូវការព័ត៌មានបន្ថែម" },
  "mobile.contact": { en: "Contact us: +855 12 376 748", km: "ទាក់ទង: +855 12 376 748" },

  // Days
  "day.monday": { en: "Monday", km: "ច័ន្ទ" },
  "day.tuesday": { en: "Tuesday", km: "អង្គារ" },
  "day.wednesday": { en: "Wednesday", km: "ពុធ" },
  "day.thursday": { en: "Thursday", km: "ព្រហស្បតិ៍" },
  "day.friday": { en: "Friday", km: "សុក្រ" },
  "day.saturday": { en: "Saturday", km: "សៅរ៍" },
  "day.sunday": { en: "Sunday", km: "អាទិត្យ" },
} as const;

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: TranslationKey): string => translations[key]?.[lang] ?? key;

  useEffect(() => {
    if (lang === "km") {
      document.documentElement.classList.add("lang-km");
    } else {
      document.documentElement.classList.remove("lang-km");
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}
