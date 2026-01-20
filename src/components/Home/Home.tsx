import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../../assets/tobi_profile.jpg";
import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";

const Home = () => {
  const { ScrollToHomeRef, ScrollToPortfoliosFn } =
    useScrollToComponentContext();

  return (
    <section
      ref={ScrollToHomeRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="bg-mesh" />

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div
          className="text-center md:text-left order-2 md:order-1"
          data-aos="fade-right"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-4 block">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="hero-gradient">Oluwatobi Abiodun</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300 mb-8">
            Full Stack Software Engineer
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            I build high-performance, scalable, and user-centric web
            applications. Specializing in Node.js, React, and Cloud
            Architectures.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={ScrollToPortfoliosFn}
              className="px-8 py-4 rounded-full bg-primary text-slate-900 font-bold hover:bg-white transition-all duration-300 flex items-center group shadow-lg shadow-primary/20"
            >
              View Work
              <MdOutlineKeyboardArrowRight
                size={24}
                className="ml-2 group-hover:rotate-90 transition-transform duration-300"
              />
            </button>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass border border-white/10 hover:border-primary/50 transition-all duration-300 font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative" data-aos="fade-left">
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 w-full h-full glass rounded-3xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border border-white/10">
              <img
                src={HeroImage}
                alt="Oluwatobi Abiodun"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/10 shadow-xl hidden md:block"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="text-primary font-bold">5+</span>
              <p className="text-xs text-slate-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
