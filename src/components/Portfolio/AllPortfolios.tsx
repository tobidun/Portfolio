import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { PortfolioType } from "../../types/PortfolioType";
import { allPortfolios } from "../AllPortfolioDetails/AllPortfolios";

const companies = [
  "All",
  "Dstrct",
  "Masterpiece",
  "Starnet",
  "Qiit",
  "MIS",
  "Peakreach",
  "Spragon",
  "Uniti",
];

function AllPortfolios() {
  const [activeCompany, setActiveCompany] = useState("All");

  const filteredPortfolios =
    activeCompany === "All"
      ? allPortfolios
      : allPortfolios.filter((p) => p.company === activeCompany);

  return (
    <div className="space-y-12">
      {/* Company Tabs */}
      <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => setActiveCompany(company)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
              activeCompany === company
                ? "bg-primary text-slate-900 border-primary shadow-lg shadow-primary/20"
                : "bg-white/5 text-slate-400 border-white/10 hover:border-primary/50 hover:text-white"
            }`}
          >
            {company}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolios.map(
          ({ id, src, link, name, disc }: PortfolioType, idx) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="glass-card group overflow-hidden rounded-3xl border border-white/5 flex flex-col h-full hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {name}
                  </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                  {disc}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => window.open(link, "_blank")}
                    className="w-full py-2.5 md:py-3 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 text-white group-hover:text-primary font-bold text-xs md:text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    Explore Project
                    <FiExternalLink
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {filteredPortfolios.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No projects found for this company.
        </div>
      )}
    </div>
  );
}

export default AllPortfolios;
