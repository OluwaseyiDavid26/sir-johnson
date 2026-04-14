import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import BrandMarquee from "@/components/ui/BrandMarquee";
import About from "@/components/AboutBro";
import Portfolio from "@/components/Portfolio";
// import Testimonial from "@/components/Testimonial";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BrandMarquee />
      <About />
      <Portfolio />
      {/* <Testimonial /> */}
      <ContactUs />
      {/* <div className="flex justify-center items-center h-screen">
        <Button>Get Started</Button>
      </div> */}
    </>
  );
}
