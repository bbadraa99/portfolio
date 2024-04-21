import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Description from "@/components/Description";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LeftIcon from "@/components/LeftIcon";
import RightIcon from "@/components/RightIcon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* className="bg-gradient-to-b from-blue-30 to-white" */}
      <div 
        className="h-full flex flex-col bg-gradient-to-b from-background-50 via-background-30 to-background-30"
      >
        <Navbar />
        <LeftIcon />
        <RightIcon />
        
        <div className="padding-container px-5">
          <About />
          <Description />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
