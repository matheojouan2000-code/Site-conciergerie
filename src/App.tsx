import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingCTA } from "./components/layout/FloatingCTA";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { SectionDivider } from "./components/layout/SectionDivider";
import { Hero } from "./components/sections/Hero";
import { StatsBand } from "./components/sections/StatsBand";
import { Services } from "./components/sections/Services";
import { AuditAnnonce } from "./components/sections/AuditAnnonce";
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
        <SectionDivider />
        <Offers />
        <SectionDivider />
        <AuditAnnonce />
        <SectionDivider />
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
