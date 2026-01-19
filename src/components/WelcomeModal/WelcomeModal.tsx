import { useEffect } from "react";
import { useAppContext } from "../../contexts/useAppContext";

function WelcomeModal() {
  const { toggleModal, modalState } = useAppContext();

  const closeModal = () => {
    toggleModal();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.getElementById("showModal");
      if (event.target === modal) {
        toggleModal();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [toggleModal]);

  if (modalState) return null;

  return (
    <div
      id="showModal"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div className="glass-card max-w-lg w-full p-10 rounded-3xl relative border border-white/10 shadow-2xl animate-in zoom-in-95 duration-500">
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors text-2xl"
          title="Close"
        >
          &times;
        </button>

        <div className="text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Greetings
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Welcome to my Portfolio
          </h1>
          <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full" />

          <p className="text-slate-400 text-lg leading-relaxed text-white mb-8">
            Explore my journey as a full-stack engineer, featuring
            high-performance architectures, interactive experiences, and
            technical explorations.
          </p>

          <button
            onClick={closeModal}
            className="px-8 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:bg-white transition-all shadow-lg shadow-primary/20"
          >
            Start Exploring
          </button>

          <p className="text-[10px] text-slate-500 mt-8 text-white uppercase tracking-[0.3em]">
            built with Passion & Precision
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;
