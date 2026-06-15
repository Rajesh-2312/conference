import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import CallForPapers from "./components/CallForPapers";
import Tracks from "./components/Tracks";
import Speakers from "./components/Speakers";
import Publication from "./components/Publication";
import Registration from "./components/Registration";
import Committee from "./components/Committee";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <CallForPapers />
        <Tracks />
        <Speakers />
        <Publication />
        <Registration />
        <Committee />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
