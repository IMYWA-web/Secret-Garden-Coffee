/* =============================================================================
   HERO SECTION — Secret Garden Coffee
   Design: Analog Warmth Botanical — full-bleed garden imagery with layered type
   ============================================================================= */
import { Star, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const HERO_IMG = "/banner.jpeg";

export default function HeroSection() {
  const { t } = useLanguage();

  // Check if currently open (8 AM - 7 PM)
  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 8 && hour < 19; // 8 AM to 7 PM (19:00)
  };

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToVisit = () => {
    document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Secret Garden Coffee Shop"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — dark at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120D08] via-[#120D08]/60 to-[#120D08]/20" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120D08]/50 via-transparent to-[#120D08]/20" />
      </div>

      {/* Content */}
      <div className="relative container pb-20 md:pb-28 pt-32">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div className="flex items-center gap-2 mb-6 animate-fade-up">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i <= 4 ? "fill-[#C8722A] text-[#C8722A]" : "fill-[#C8722A]/40 text-[#C8722A]/40"}`}
                />
              ))}
            </div>
            <span className="font-mono-label text-[10px] tracking-[0.2em] text-[#EDE5D0]/70 uppercase">{t("hero.googleReviews")}</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-[#EDE5D0] text-5xl md:text-7xl lg:text-8xl leading-none mb-4 animate-fade-up-delay-1">
            Secret<br />
            <span className="text-[#C8722A]">Garden</span>
          </h1>
          <p className="font-display text-[#EDE5D0]/60 text-2xl md:text-3xl mb-6 animate-fade-up-delay-2">
            {t("hero.subtitle")}
          </p>

          {/* Tagline */}
          <p className="font-body italic text-[#EDE5D0]/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up-delay-3">
            {t("hero.tagline")}
          </p>

          {/* Hours badge */}
          <div className="flex items-center gap-2 mb-8 animate-fade-up-delay-4">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{
              backgroundColor: isOpen() ? "#5C7A3E" : "#E74C3C",
            }} />
            <Clock className="w-3.5 h-3.5 text-[#C8722A] flex-shrink-0" />
            <span className="font-mono-label text-[10px] md:text-xs tracking-wider text-[#EDE5D0]/70">{isOpen() ? t("hero.open") : t("hero.closed")} · {t("hero.hours")}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-up-delay-5">
            <button
              onClick={scrollToMenu}
              className="bg-[#A64E2F] hover:bg-[#C8722A] text-[#EDE5D0] px-6 md:px-8 py-3 md:py-3.5 font-mono-label text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#A64E2F]/30"
            >
              {t("hero.viewMenu")}
            </button>
            <button
              onClick={scrollToVisit}
              className="border border-[#EDE5D0]/40 hover:border-[#C8722A] text-[#EDE5D0] hover:text-[#C8722A] px-6 md:px-8 py-3 md:py-3.5 font-mono-label text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              {t("nav.findUs")}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-[#EDE5D0]/30" />
        <span className="font-mono-label text-[9px] tracking-[0.3em] text-[#EDE5D0]/40 uppercase">{t("hero.scroll")}</span>
      </div>
    </section>
  );
}
