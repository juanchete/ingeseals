import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home(): React.ReactElement {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
