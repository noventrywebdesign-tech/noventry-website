import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Courts from "@/components/Courts";
import Training from "@/components/Training";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Courts />
        <Training />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
