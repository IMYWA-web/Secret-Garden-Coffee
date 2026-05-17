/* =============================================================================
   FEATURE STRIP — Secret Garden Coffee
   Design: Analog Warmth Botanical — dark espresso strip with key features
   ============================================================================= */
import { Coffee, Leaf, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function FeatureStrip() {
  const { t } = useLanguage();

  const features = [
    { icon: Coffee, title: t("feat.coffee"), desc: t("feat.coffeeDesc") },
    { icon: Leaf, title: t("feat.garden"), desc: t("feat.gardenDesc") },
    { icon: MapPin, title: t("feat.location"), desc: t("feat.locationDesc") },
    { icon: Clock, title: t("feat.open"), desc: t("feat.openDesc") },
  ];

  return (
    <section className="bg-[#120D08] border-y border-[#A64E2F]/20 py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#A64E2F]/20">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3 md:px-8 first:pl-0 last:pr-0">
              <div className="w-9 h-9 border border-[#C8722A]/40 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#C8722A]" />
              </div>
              <div>
                <p className="font-body font-semibold text-[#EDE5D0] text-sm leading-tight">{title}</p>
                <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-[#EDE5D0]/40 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
