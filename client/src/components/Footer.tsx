/* =============================================================================
   FOOTER — Secret Garden Coffee
   Design: Analog Warmth Botanical — dark espresso footer with botanical ornament
   ============================================================================= */
import { MapPin, Phone, Clock } from "lucide-react";
import { TiktokIcon } from "./TiktokIcon";
import { useLanguage } from "../contexts/LanguageContext";

const handleNav = (href: string) => {
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#menu", label: t("nav.menu") },
    { href: "#story", label: t("nav.story") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#visit", label: t("nav.visit") },
  ];

  return (
    <footer className="bg-[#0D0A06] border-t border-[#A64E2F]/20">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.jpeg"
                alt="Secret Garden Coffee Logo"
                className="h-20 w-auto object-contain mb-3 rounded-full"
              />
              <p className="font-mono-label text-[9px] tracking-[0.35em] uppercase text-[#C8722A]">Phnom Penh, Cambodia</p>
            </div>
            <p className="font-body text-[#EDE5D0]/55 text-sm leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.tiktok.com/@secretgardencoffee?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDE5D0]/40 hover:text-[#C8722A] transition-colors"
                aria-label="TikTok"
              >
                <TiktokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE5D0]/40 mb-6">{t("footer.quickLinks")}</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="font-body text-[#EDE5D0]/60 hover:text-[#C8722A] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-[#EDE5D0]/40 mb-6">{t("footer.contact")}</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8722A] flex-shrink-0 mt-0.5" />
                <span className="font-body text-[#EDE5D0]/60 text-sm">HRGQ+5W6, Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8722A] flex-shrink-0" />
                <a href="tel:012376748" className="font-body text-[#EDE5D0]/60 text-sm hover:text-[#C8722A] transition-colors">
                  +855 12 376 748
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C8722A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-[#EDE5D0]/60 text-sm">{t("footer.openDaily")}</p>
                  <p className="font-mono-label text-[10px] tracking-wider text-[#EDE5D0]/40 mt-0.5">8 AM – 7 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EDE5D0]/5 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono-label text-[10px] tracking-[0.15em] text-[#EDE5D0]/30">
            {t("footer.rights")}
          </p>
          <p className="font-mono-label text-[10px] tracking-[0.15em] text-[#EDE5D0]/20">
            {t("footer.priceRange")}
          </p>
        </div>
      </div>
    </footer>
  );
}
