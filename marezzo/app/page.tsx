import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import SignatureCuts from "@/components/sections/SignatureCuts";
import TheFire from "@/components/sections/TheFire";
import Origin from "@/components/sections/Origin";
import Chef from "@/components/sections/Chef";
import Cellar from "@/components/sections/Cellar";
import Interior from "@/components/sections/Interior";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import PrivateDining from "@/components/sections/PrivateDining";
import ReservationCTA from "@/components/sections/ReservationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <SignatureCuts />
      <TheFire />
      <Origin />
      <Chef />
      <Cellar />
      <Interior />
      <Gallery />
      <Reviews />
      <PrivateDining />
      <ReservationCTA />
    </>
  );
}
