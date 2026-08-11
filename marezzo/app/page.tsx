import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Philosophy from "@/components/sections/Philosophy";
import SignatureCuts from "@/components/sections/SignatureCuts";
import Journey from "@/components/sections/Journey";
import Origin from "@/components/sections/Origin";
import Aging from "@/components/sections/Aging";
import TheFire from "@/components/sections/TheFire";
import Chef from "@/components/sections/Chef";
import Cellar from "@/components/sections/Cellar";
import Evening from "@/components/sections/Evening";
import Interior from "@/components/sections/Interior";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import PrivateDining from "@/components/sections/PrivateDining";
import ReservationCTA from "@/components/sections/ReservationCTA";

// Rhythm, deliberately: WOW (Hero) → ruhig (Story) → Story/Detail
// (Philosophy) → WOW (Signature Cuts) → Story (Journey) → Detail (Origin) →
// WOW/Kontrast, kalt (Aging) → WOW, warm — the cold→warm cut is the point,
// so Aging sits directly before TheFire, not after it → ruhig/emotional
// (Chef) → interaktiv (Cellar) → ruhig (Evening) → immersiv (Interior) →
// immersiv weiter (Gallery) → ruhig (Reviews) → premium (Private Dining) →
// Finale (Reservation).
export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Philosophy />
      <SignatureCuts />
      <Journey />
      <Origin />
      <Aging />
      <TheFire />
      <Chef />
      <Cellar />
      <Evening />
      <Interior />
      <Gallery />
      <Reviews />
      <PrivateDining />
      <ReservationCTA />
    </>
  );
}
