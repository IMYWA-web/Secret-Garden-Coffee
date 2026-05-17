/* =============================================================================
   HOME PAGE — Secret Garden Coffee
   Design: Analog Warmth Botanical Edition
   Sections: Hero → Feature Strip → Menu → Story → Reviews → Popular Times → Visit → Footer
   ============================================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import ReviewsSection from "@/components/ReviewsSection";
import PopularTimes from "@/components/PopularTimes";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <MenuSection />
      <StorySection />
      <ReviewsSection />
      <PopularTimes />
      <VisitSection />
      <Footer />
    </div>
  );
}
