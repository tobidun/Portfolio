import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    desc: "End-to-end web applications built with modern frameworks like React, Node.js, and TypeScript. Focus on scalability and clean code.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Creating intuitive, aesthetically pleasing interfaces that provide seamless user experiences across all devices.",
  },
  {
    icon: <FaServer />,
    title: "Backend Engineering",
    desc: "Robust server-side logic, API design, and database management ensuring high performance and security.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Optimization",
    desc: "Responsive web design and cross-platform mobile solutions that feel native and perform excellently.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Infrastructure",
    desc: "Deploying and managing applications on AWS/GCP with automated CI/CD pipelines and high availability.",
  },
  {
    icon: <FaSearch />,
    title: "Technical SEO & Perf",
    desc: "Optimizing applications for search engines and lightning-fast load times to maximize reach and conversion.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Offerings
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">Services I Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I provide comprehensive technical solutions tailored to your needs,
            combining engineering excellence with creative design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="glass p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl text-primary mb-8 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
