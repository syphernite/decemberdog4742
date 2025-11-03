import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <AboutSection />
        <MenuPreview />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
