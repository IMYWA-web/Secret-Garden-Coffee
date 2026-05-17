/* =============================================================================
   REVIEWS SECTION — Secret Garden Coffee
   Design: Analog Warmth Botanical — editorial review cards with rating summary
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const reviews = [
  {
    name: "Bouasavanh Sengsoulin",
    role: "Local Guide · 72 reviews",
    rating: 5,
    text: "Lovely coffee spot with a warm and relaxing vibe! The place feels cozy yet stylish, with beautiful greenery and thoughtful design that makes you feel relax. It's a great space to sit back, enjoy a drink, and unwind.",
    date: "3 months ago",
    highlight: true,
  },
  {
    name: "ChhingChang Waterfall",
    role: "Local Guide · 1,331 reviews",
    rating: 5,
    text: "A good cafe with nice decoration. Staffs are friendly, the taste & service are good and reasonably priced. It's also a good place to relax and for whom like taking photo too. Recommend if you're around here.",
    date: "3 months ago",
    highlight: false,
  },
  {
    name: "PP Pat",
    role: "Local Guide · 82 reviews",
    rating: 5,
    text: "Beautiful indoor and outdoor setting. Friendly service. Good food and delicious coffee. Correct prices.",
    date: "2 months ago",
    highlight: false,
  },
];

const ratingBreakdown = [
  { stars: 5, pct: 72 },
  { stars: 4, pct: 18 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 2 },
];

const tags = ["bridgerton vibe", "outdoor seating", "matcha", "rabbits in the garden", "cozy", "friendly staff"];

export default function ReviewsSection() {
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
    <section id="reviews" ref={sectionRef} className="py-24 bg-[#EDE5D0]">
      <div className="container">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-label">
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#A64E2F]">{t("reviews.label")}</span>
          </div>
          <h2 className="font-display text-[#1C2E1A] text-5xl md:text-6xl">{t("reviews.title")}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: rating summary */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Big rating */}
            <div className="bg-[#1C2E1A] text-[#EDE5D0] p-8 mb-6">
              <div className="font-display text-7xl text-[#C8722A] leading-none">4.4</div>
              <div className="flex gap-1 mt-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className={`w-4 h-4 ${i <= 4 ? "fill-[#C8722A] text-[#C8722A]" : "fill-[#C8722A]/40 text-[#C8722A]/40"}`} />
                ))}
              </div>
              <p className="font-mono-label text-[11px] tracking-wider text-[#EDE5D0]/60 mt-2">{t("reviews.based")}</p>
              {/* Breakdown */}
              <div className="mt-6 space-y-2">
                {ratingBreakdown.map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="font-mono-label text-[10px] text-[#EDE5D0]/60 w-4">{stars}</span>
                    <div className="flex-1 h-1.5 bg-[#EDE5D0]/10 overflow-hidden">
                      <div
                        className="h-full bg-[#C8722A] transition-all duration-1000"
                        style={{ width: visible ? `${pct}%` : "0%" }}
                      />
                    </div>
                    <span className="font-mono-label text-[10px] text-[#EDE5D0]/40 w-8">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#1C2E1A]/50 mb-3">{t("reviews.mentioned")}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-label text-[10px] tracking-[0.1em] uppercase border border-[#1C2E1A]/30 text-[#1C2E1A]/70 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: review cards */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  review.highlight
                    ? "bg-[#1C2E1A] border-[#A64E2F]/30 text-[#EDE5D0]"
                    : "bg-[#FAF7EE] border-[#1C2E1A]/10 text-[#1C2E1A]"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`font-body font-semibold text-base ${review.highlight ? "text-[#EDE5D0]" : "text-[#1C2E1A]"}`}>
                      {review.name}
                    </h4>
                    <p className={`font-mono-label text-[10px] tracking-wider mt-0.5 ${review.highlight ? "text-[#EDE5D0]/50" : "text-[#1C2E1A]/50"}`}>
                      {review.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3 h-3 ${s <= review.rating ? "fill-[#C8722A] text-[#C8722A]" : "fill-[#C8722A]/30 text-[#C8722A]/30"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Quote className={`absolute -top-1 -left-1 w-6 h-6 opacity-20 ${review.highlight ? "text-[#C8722A]" : "text-[#A64E2F]"}`} />
                  <p className={`font-body italic text-sm leading-relaxed pl-4 ${review.highlight ? "text-[#EDE5D0]/80" : "text-[#1C2E1A]/70"}`}>
                    {review.text}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-current/10">
                  <span className={`font-mono-label text-[10px] tracking-wider ${review.highlight ? "text-[#EDE5D0]/40" : "text-[#1C2E1A]/40"}`}>
                    {review.date} · Google Maps
                  </span>
                </div>
              </div>
            ))}

            {/* View more CTA */}
            <a
              href="https://maps.app.goo.gl/t2zyfZpHcAhPt9x6A"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-4 border border-[#1C2E1A]/20 hover:border-[#A64E2F] text-[#1C2E1A]/60 hover:text-[#A64E2F] font-mono-label text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              {t("reviews.viewAll")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
