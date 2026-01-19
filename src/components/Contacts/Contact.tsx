import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import OtherContactDetails from "./OtherContactDetails";
import SendMailForm from "./SendMailForm";

const Contact = () => {
  const { ScrollToContactRef } = useScrollToComponentContext();

  return (
    <section ref={ScrollToContactRef} id="contact" className="relative">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <OtherContactDetails />
          </div>
          <div data-aos="fade-left">
            <SendMailForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
