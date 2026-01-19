import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTop from "./components/BackToTop/BackToTop";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import AppContextProvider, { useAppContext } from "./contexts/useAppContext";
import ScrollToComponentProvider from "./contexts/useScrollToComponentContext";
import { modal } from "./helpers/htmlInputElementsVariables";
import MainPage from "./pages/MainPage";
import { NavbarAndButtonFn } from "./utils/navbarAndButton";
import { scrollBarIndicatorFn } from "./utils/scrollIndicator";

function App() {
  const { modalState } = useAppContext();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      scrollBarIndicatorFn();
      NavbarAndButtonFn();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (modalState === false) {
      intervalId = setInterval(() => {
        if (modal !== null) {
          modal.style.display = "block";
        }
      }, 3000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [modalState]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  // if (loading) return <AppLoader />;

  return (
    <AppContextProvider>
      <ScrollToComponentProvider>
        <ScrollIndicator />
        <MainPage />
        <BackToTop />
      </ScrollToComponentProvider>
    </AppContextProvider>
  );
}

export default App;
