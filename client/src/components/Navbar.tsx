/* =============================================================================
   NAVBAR — Secret Garden Coffee
   Design: Analog Warmth Botanical — dark forest navbar with terracotta accents
   ============================================================================= */
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Globe } from "lucide-react";
import { TiktokIcon } from "./TiktokIcon";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#menu", label: t("nav.menu") },
    { href: "#story", label: t("nav.story") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#visit", label: t("nav.visit") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "en" ? "km" : "en");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#120D08]/95 backdrop-blur-sm shadow-lg shadow-[#120D08]/40"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="flex items-center gap-3 group relative"
          title="Secret Garden Coffee"
        >
          {/* Background shape */}
          <div className="absolute -z-10 -left-1 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#5C7A3E]/10 blur-lg group-hover:bg-[#5C7A3E]/20 transition-all duration-300" />
          
          {/* Logo with frame and shadow */}
          <div className="relative p-1.5 rounded-full border-2 border-[#C8722A]/30 group-hover:border-[#C8722A]/60 shadow-lg shadow-[#120D08]/40 group-hover:shadow-xl group-hover:shadow-[#C8722A]/20 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
            <img
              src="/navlogo.png"
              alt="Secret Garden Coffee Logo"
              className="h-8 md:h-10 w-auto object-contain rounded-full"
            />
          </div>
          
          <div className="hidden sm:flex flex-col leading-tight group-hover:text-[#C8722A] transition-colors duration-300">
            <span className="font-display text-[#EDE5D0] text-sm md:text-base tracking-wide">Secret Garden</span>
            <span className="font-mono-label text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-[#C8722A]">Coffee</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-[#EDE5D0]/70 hover:text-[#C8722A] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social + Lang + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.tiktok.com/@secretgardencoffee?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EDE5D0]/50 hover:text-[#C8722A] transition-colors"
            aria-label="TikTok"
          >
            <TiktokIcon className="w-4 h-4" />
          </a>
          <a
            href="https://maps.app.goo.gl/dNiJbXb4BeqBYsa97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EDE5D0]/50 hover:text-[#C8722A] transition-colors"
            aria-label="Google Maps"
          >
            <MapPin className="w-4 h-4" />
          </a>
          <div className="w-px h-4 bg-[#EDE5D0]/20" />
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-[#EDE5D0]/60 hover:text-[#C8722A] transition-all duration-200 group"
            aria-label="Toggle language"
            id="lang-toggle-desktop"
          >
            <Globe className="w-4 h-4" />
            <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase">
              {lang === "en" ? "ខ្មែរ" : "EN"}
            </span>
          </button>
          <div className="w-px h-4 bg-[#EDE5D0]/20" />
          <a
            href="#visit"
            onClick={(e) => { e.preventDefault(); handleNav("#visit"); }}
            className="bg-[#A64E2F] hover:bg-[#C8722A] text-[#EDE5D0] px-4 py-2 transition-colors duration-200"
          >
            <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase">{t("nav.findUs")}</span>
          </a>
        </div>

        {/* Mobile: lang toggle + menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-[#EDE5D0]/60 hover:text-[#C8722A] p-2 transition-colors"
            aria-label="Toggle language"
            id="lang-toggle-mobile"
          >
            <Globe className="w-5 h-5" />
            <span className="font-mono-label text-[10px] tracking-wider uppercase">
              {lang === "en" ? "ខ្មែរ" : "EN"}
            </span>
          </button>
          <button
            className="text-[#EDE5D0] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#120D08] border-t border-[#A64E2F]/30 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="block px-4 py-2 font-mono-label text-[11px] tracking-[0.2em] uppercase text-[#EDE5D0] hover:text-[#C8722A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-4 justify-center">
            <a href="https://www.tiktok.com/@secretgardencoffee?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-[#EDE5D0]/50 hover:text-[#C8722A] transition-colors" aria-label="TikTok">
              <TiktokIcon className="w-5 h-5" />
            </a>
            <a href="https://maps.app.goo.gl/dNiJbXb4BeqBYsa97" target="_blank" rel="noopener noreferrer" className="text-[#EDE5D0]/50 hover:text-[#C8722A] transition-colors" aria-label="Google Maps">
              <MapPin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-center font-body text-[11px] text-[#EDE5D0]/50 mt-4 italic">{t("mobile.info")}</p>
          <a
            href="tel:+85512376748"
            className="mt-1 flex items-center justify-center bg-[#A64E2F] text-[#EDE5D0] px-4 py-3"
          >
            <span className="font-mono-label text-[10px] tracking-[0.2em] uppercase">{t("mobile.contact")}</span>
          </a>
        </div>
      )}
    </header>
  );
}
