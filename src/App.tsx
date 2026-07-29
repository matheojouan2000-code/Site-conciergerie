import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingCTA } from "./components/layout/FloatingCTA";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { Hero } from "./components/sections/Hero";
import { StatsBand } from "./components/sections/StatsBand";
import { Services } from "./components/sections/Services";
import { Profitability } from "./components/sections/Profitability";
import { RevenueCalculator } from "./components/sections/RevenueCalculator";
import { Offers } from "./components/sections/Offers";
import { FAQ } from "./components/sections/FAQ";
import { Booking } from "./components/sections/Booking";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <Profitability />
        <RevenueCalculator />
        <Offers />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}

export default App;
