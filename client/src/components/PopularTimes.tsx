/* =============================================================================
   POPULAR TIMES — Secret Garden Coffee
   Design: Analog Warmth Botanical — vintage bar chart showing busy hours
   ============================================================================= */
import { useEffect, useRef, useState } from "react";

const timeData = [
  { hour: "6a", level: 2 },
  { hour: "7a", level: 3 },
  { hour: "8a", level: 5 },
  { hour: "9a", level: 7 },
  { hour: "10a", level: 8 },
  { hour: "11a", level: 7 },
  { hour: "12p", level: 6 },
  { hour: "1p", level: 7 },
  { hour: "2p", level: 6 },
  { hour: "3p", level: 5 },
  { hour: "4p", level: 6 },
  { hour: "5p", level: 8 },
  { hour: "6p", level: 9 },
  { hour: "7p", level: 5 },
];

export default function PopularTimes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const peakHour = timeData.reduce((a, b) => (a.level > b.level ? a : b));

  return (
    <section ref={sectionRef} className="py-16 bg-[#FAF7EE] border-t border-[#1C2E1A]/10">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="section-label">
            <span className="font-mono-label text-[10px] tracking-[0.4em] uppercase text-[#A64E2F]">When to Visit</span>
          </div>
          <h3 className="font-display text-[#1C2E1A] text-3xl mb-2">Popular Times</h3>
          <p className="font-body italic text-[#1C2E1A]/50 text-sm mb-8">
            Based on typical Tuesday foot traffic. Usually busiest around {peakHour.hour}.
          </p>

          {/* Bar chart */}
          <div className="flex items-end gap-1.5 h-24">
            {timeData.map(({ hour, level }, i) => (
              <div key={hour} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-[#A64E2F]/15 relative overflow-hidden"
                  style={{ height: "80px" }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#5C7A3E] transition-all duration-700"
                    style={{
                      height: visible ? `${(level / 10) * 100}%` : "0%",
                      transitionDelay: `${i * 40}ms`,
                      opacity: level >= 8 ? 1 : level >= 5 ? 0.7 : 0.45,
                    }}
                  />
                </div>
                <span className="font-mono-label text-[8px] text-[#1C2E1A]/40">{hour}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#5C7A3E]" />
              <span className="font-mono-label text-[9px] tracking-wider text-[#1C2E1A]/50 uppercase">Busy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#5C7A3E]/40" />
              <span className="font-mono-label text-[9px] tracking-wider text-[#1C2E1A]/50 uppercase">Quiet</span>
            </div>
            <div className="ml-auto font-mono-label text-[9px] tracking-wider text-[#1C2E1A]/40 uppercase">
              Closes 7 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
