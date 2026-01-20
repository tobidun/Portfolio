import About from "../components/About/About";
import Contact from "../components/Contacts/Contact";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import AllSocialLinks from "../components/SocialLinksAndResume/AllSocialLinks";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";

function MainPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="bg-mesh" />
      <NavBar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <AllSocialLinks />
      <WelcomeModal />
    </div>
  );
}

export default MainPage;
