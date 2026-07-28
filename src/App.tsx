import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingCTA } from "./components/layout/FloatingCTA";
import { Hero } from "./components/sections/Hero";
import { RevenueCalculator } from "./components/sections/RevenueCalculator";
import { Booking } from "./components/sections/Booking";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RevenueCalculator />
        <Booking />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
