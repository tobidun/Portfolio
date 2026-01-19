import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import AllPortfolios from "./AllPortfolios";

const Portfolio = () => {
  const { ScrollToPortfoliosRef } = useScrollToComponentContext();

  return (
    <section ref={ScrollToPortfoliosRef} id="portfolio" className="relative">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my recent works, ranging from complex backend
            architectures to interactive frontend experiences. Each project
            represents a unique challenge solved.
          </p>
        </div>

        <AllPortfolios />
      </div>
    </section>
  );
};

export default Portfolio;
