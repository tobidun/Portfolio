import { FaBars, FaTimes } from "react-icons/fa";
import { useAppContext } from "../../contexts/useAppContext";
import useLinksToComponents from "../../hooks/useLinksToComponents";
import { ComponentLinksType } from "../../types/ComponentLinksType";

function MobileDropDownMenu({ setNav, nav }: any) {
  const { changeActiveTab } = useAppContext();
  const { componentLinks } = useLinksToComponents();

  return (
    <>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center md:hidden">
          <div
            onClick={() => setNav(false)}
            className="absolute top-8 right-8 cursor-pointer text-slate-400 hover:text-primary transition-colors"
          >
            <FaTimes size={30} />
          </div>

          <ul className="flex flex-col items-center gap-8">
            {componentLinks.map(({ id, link, fn }: ComponentLinksType) => (
              <li key={id} data-aos="fade-up">
                <button
                  onClick={() => {
                    changeActiveTab(link);
                    fn();
                    setNav(false);
                  }}
                  className="text-4xl font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-all duration-300"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileDropDownMenu;
