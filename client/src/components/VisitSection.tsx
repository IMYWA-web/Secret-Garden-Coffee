/* =============================================================================
   VISIT SECTION — Secret Garden Coffee
   Design: Analog Warmth Botanical — dark section with map and hours
   ============================================================================= */
import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, Phone, Coffee, Leaf, ShoppingBag } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
// MapView import removed since we use iframe

export default function VisitSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const { t } = useLanguage();

  const dayKeys = ["day.sunday", "day.monday", "day.tuesday", "day.wednesday", "day.thursday", "day.friday", "day.saturday"] as const;
  const todayIndex = new Date().getDay();

  const hours = dayKeys.map((key, i) => ({
    day: t(key),
    time: "8 AM – 7 PM",
    isToday: i === todayIndex,
  }));

  const services = [
    { icon: Coffee, label: t("visit.dineIn") },
    { icon: Leaf, label: t("visit.outdoor") },
    { icon: ShoppingBag, label: t("visit.takeaway") },
  ];

  // Check if currently open (8 AM - 7 PM)
  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 8 && hour < 19; // 8 AM to 7 PM (19:00)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="visit" ref={sectionRef} className="py-24 bg-[#120D08]">
      <div className="container">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-[#A64E2F]/60" />
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#C8722A]">{t("visit.label")}</span>
          </div>
          <h2 className="font-display text-[#EDE5D0] text-5xl md:text-6xl">{t("visit.title")}</h2>
          <p className="font-body italic text-[#EDE5D0]/50 mt-3 max-w-md text-lg">
            {t("visit.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className={`space-y-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#C8722A]/40 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#C8722A]" />
              </div>
              <div>
                <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE5D0]/40 mb-1">{t("visit.address")}</p>
                <p className="font-body text-[#EDE5D0] text-base">HRGQ+5W6, Phnom Penh</p>
                <p className="font-mono-label text-[10px] tracking-wider text-[#EDE5D0]/40 mt-0.5">Cambodia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#C8722A]/40 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#C8722A]" />
              </div>
              <div>
                <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE5D0]/40 mb-1">{t("visit.phone")}</p>
                <a href="tel:+85512376748" className="font-body text-[#EDE5D0] text-base hover:text-[#C8722A] transition-colors">
                  +855 12 376 748
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#C8722A]/40 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#C8722A]" />
              </div>
              <div className="flex-1">
                <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE5D0]/40 mb-3">{t("visit.openingHours")}</p>
                <div className="space-y-1.5">
                  {hours.map(({ day, time, isToday }) => (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-1.5 border-b border-[#EDE5D0]/5 ${
                        isToday ? "text-[#C8722A]" : "text-[#EDE5D0]/70"
                      }`}
                    >
                      <span className={`font-mono-label text-[11px] tracking-wider ${isToday ? "font-bold" : ""}`}>
                        {day}
                        {isToday && (
                          <span className="ml-2 text-[9px] bg-[#A64E2F] text-[#EDE5D0] px-1.5 py-0.5">{t("visit.today")}</span>
                        )}
                      </span>
                      <span className="font-mono-label text-[11px]">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE5D0]/40 mb-4">{t("visit.services")}</p>
              <div className="flex flex-wrap gap-3">
                {services.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 border border-[#C8722A]/30 px-4 py-2.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#C8722A]" />
                    <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#EDE5D0]/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative h-80 lg:h-full min-h-80 border border-[#C8722A]/20 overflow-hidden">
              <iframe
                title="Secret Garden Coffee Location"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[320px]"
                src="https://maps.google.com/maps?q=Secret+Garden+Coffee+shop,+Phnom+Penh&hl=en&z=16&output=embed"
                onLoad={() => setMapReady(true)}
              />
              {!mapReady && (
                <div className="absolute inset-0 bg-[#1C2E1A] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-[#C8722A] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#EDE5D0]/40">{t("visit.loading")}</p>
                  </div>
                </div>
              )}
            </div>
            {/* Map caption */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{
                backgroundColor: isOpen() ? "#5C7A3E" : "#E74C3C",
              }} />
              <span className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#EDE5D0]/40">
                Secret Garden Coffee · HRGQ+5W6, Phnom Penh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
