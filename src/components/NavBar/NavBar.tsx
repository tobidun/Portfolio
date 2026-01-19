import { useState, useEffect } from "react";
import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import { useAppContext } from "../../contexts/useAppContext";
import useLinksToComponents from "../../hooks/useLinksToComponents";
import { ComponentLinksType } from "../../types/ComponentLinksType";
import MobileDropDownMenu from "./MobileDropDownMenu";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { ScrollToNavBarRef } = useScrollToComponentContext();
  const { currentTab, changeActiveTab } = useAppContext();
  const { componentLinks } = useLinksToComponents();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={ScrollToNavBarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div
        className={`mx-auto w-[90%] md:w-[80%] max-w-5xl glass rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "shadow-2xl shadow-primary/10 border-white/20"
            : "border-white/10"
        }`}
      >
        <div className="flex items-center">
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Oluwatobi Abiodun
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {componentLinks.map(({ id, link, fn }: ComponentLinksType) => (
            <li key={id}>
              <button
                onClick={() => {
                  changeActiveTab(link);
                  fn();
                }}
                className={`nav-link text-sm uppercase tracking-widest ${
                  currentTab === link
                    ? "text-primary font-bold"
                    : "text-slate-400"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <MobileDropDownMenu setNav={setNav} nav={nav} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
