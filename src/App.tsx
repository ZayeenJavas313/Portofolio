import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Portfolio } from "@/components/Portfolio";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <Header />
      <main className="grow">
        <Hero />
        <Story />
        <Services />
        <Pricing />
        <Portfolio />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
