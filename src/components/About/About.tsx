import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";

const About = () => {
  const { ScrollToAboutRef } = useScrollToComponentContext();

  return (
    <section ref={ScrollToAboutRef} id="about" className="relative">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Discover
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-10 rounded-3xl" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hi, I'm{" "}
              <span className="text-white font-bold">Oluwatobi Abiodun</span>, a
              passionate Full Stack Software Engineer dedicated to crafting
              exceptional digital experiences. My approach combines technical
              excellence with a deep understanding of user needs.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With a strong foundation in backend architecture and frontend
              interactivity, I bridge the gap between complex logic and
              beautiful interfaces. I thrive in collaborative environments and
              am always eager to tackle new challenges in the ever-evolving tech
              landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
            {[
              {
                label: "Result-Oriented",
                icon: "🚀",
                desc: "Focused on delivering high-quality, measurable outcomes.",
              },
              {
                label: "Team Player",
                icon: "🤝",
                desc: "Collaborative mindset with excellent communication skills.",
              },
              {
                label: "Cloud Expert",
                icon: "☁️",
                desc: "Experienced in AWS and cloud-native architectures.",
              },
              {
                label: "Lifelong Learner",
                icon: "🧠",
                desc: "Constantly updating my stack with modern technologies.",
              },
            ].map((trait, index) => (
              <div
                key={index}
                className="glass border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{trait.icon}</span>
                <h4 className="font-bold text-white mb-2">{trait.label}</h4>
                <p className="text-xs text-slate-400">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
