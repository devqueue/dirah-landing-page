import AboutSection from "@/sections/about";
import AssetsSection from "@/sections/assets";
import Footer from "@/sections/footer";
import GoalsSection from "@/sections/goals";
import Hero from "@/sections/hero";
import MapSection from "@/sections/map";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <AssetsSection />
      <div className="bg-[#B59668]/40">
        <MapSection />
        <GoalsSection />
      </div>
      <Footer />
    </>
  );
}
