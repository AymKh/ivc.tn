import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import VirtualTour from "./components/VirtualTour";
import DiscordBanner from "./components/DiscordBanner";



function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <SocialLinks />
      <VirtualTour />
      <DiscordBanner />
      <Footer />
    </div>
  );
}

export default App;
