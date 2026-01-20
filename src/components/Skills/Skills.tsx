import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";

const Skills = () => {
  const { ScrollToSkillsRef } = useScrollToComponentContext();

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "HTML5",
        "CSS3/Sass",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
        "Nest.js",
        "PostgreSQL",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git & GitHub",
        "Docker",
        "AWS",
        "CI/CD",
        "Postman",
        "Vercel/Heroku",
      ],
    },
  ];

  return (
    <section ref={ScrollToSkillsRef} id="skills" className="relative">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Technical Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-primary/20"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-white text-center pb-4 border-b border-white/10 uppercase tracking-widest text-xs md:text-sm">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-full glass border border-white/10 text-slate-300 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
