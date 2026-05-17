/* =============================================================================
   STORY SECTION — Secret Garden Coffee
   Design: Analog Warmth Botanical — editorial split layout with garden imagery
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { Leaf, Heart, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const HERO_GARDEN_IMG = "/story1.jpg";
const GARDEN_SEATING_IMG = "/story2.jpg";

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const highlights = [
    { icon: Leaf, label: t("story.h1"), desc: t("story.h1d") },
    { icon: Heart, label: t("story.h2"), desc: t("story.h2d") },
    { icon: Star, label: t("story.h3"), desc: t("story.h3d") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="py-24 bg-[#1C2E1A] overflow-hidden">
      <div className="container">
        {/* Text section — appears first */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-[#A64E2F]/60" />
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#C8722A]">{t("story.label")}</span>
          </div>
          <h2 className="font-display text-[#EDE5D0] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {t("story.title1")}<br />
            <span className="text-[#C8722A]">{t("story.title2")}</span>
          </h2>
          <p className="font-body text-[#EDE5D0]/75 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
            {t("story.p1")}
          </p>
          <p className="font-body italic text-[#EDE5D0]/55 text-base leading-relaxed mb-10 pl-4 border-l-2 border-[#C8722A]/40 max-w-2xl">
            {t("story.quote")}
          </p>

          {/* Highlights */}
          <div className="space-y-4 max-w-2xl mb-10">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#C8722A]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-3.5 h-3.5 text-[#C8722A]" />
                </div>
                <div>
                  <p className="font-body font-semibold text-[#EDE5D0] text-sm">{label}</p>
                  <p className="font-mono-label text-[10px] tracking-[0.1em] text-[#EDE5D0]/45 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-[#EDE5D0]/30 hover:border-[#C8722A] text-[#EDE5D0] hover:text-[#C8722A] px-8 py-3 font-mono-label text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            {t("story.visitUs")}
          </button>
        </div>

        {/* Images section — appears below */}
        <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Main image */}
            <div className="relative overflow-hidden">
              <img
                src={HERO_GARDEN_IMG}
                alt="Secret Garden Coffee Shop entrance"
                className="w-full h-[400px] md:h-[480px] object-cover"
              />
              <div className="absolute inset-4 border border-[#C8722A]/30 pointer-events-none" />
            </div>

            {/* Secondary image with badge */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src={GARDEN_SEATING_IMG}
                  alt="Garden seating with rabbit statue"
                  className="w-full h-[400px] md:h-[480px] object-cover"
                />
                <div className="absolute inset-4 border border-[#5C7A3E]/30 pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-[#A64E2F] p-5 text-center">
                <div className="font-display text-[#EDE5D0] text-4xl leading-none">4.4</div>
                <div className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#EDE5D0]/70 mt-1">{t("story.googleRating")}</div>
                <div className="font-mono-label text-[9px] tracking-[0.1em] text-[#EDE5D0]/50 mt-0.5">{t("story.reviews")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
