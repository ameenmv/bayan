import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import ProgramsSection from "@/components/ProgramsSection";
import GlobalLearning from "@/components/GlobalLearning";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MissionVision />
        <ProgramsSection />
        <GlobalLearning />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
