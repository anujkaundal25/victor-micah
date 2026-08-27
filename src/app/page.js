import Footer from "@/component/ui/Footer";
import Header from "@/component/ui/Header";
import HeroSection from "@/component/sections/HeroSection"
import Image from "next/image";
import About from "@/component/sections/About";
import WhyUs from "@/component/sections/WhyUs";
import Services from "@/component/sections/Services";
import Blog from "@/component/sections/Blog";
import WorkFlow from "@/component/sections/WorkFlow";
import Contact from "@/component/sections/Contact";

export default function Home() {
  return (
    <>
    {/* <Header/> */}
    <HeroSection/>
    <About/>
    <Services/>
    <WhyUs/>
    <WorkFlow/>
    <Blog/>
    <Contact/>
    {/* <Footer/> */}
    </>
  );
}
