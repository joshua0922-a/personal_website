import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectsSection from "./component/ProjectsSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import AchievementsSection from "./component/AchievementsSection";
import LiveBackground from "./component/LiveBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[gray-900]">
      <LiveBackground />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
