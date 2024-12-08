import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Footer } from "@/sections/Footer";
import IndustriesWeServe from "@/sections/IndustriesWeServe";
import ContactSection from "@/sections/ContactSection";
import QuoteSection from "@/sections/QuoteSection";
import ValuetoProduct from "@/sections/ValuetoProduct";
import TestimonialSection from "@/sections/TestimonialSection";
import ServicesSection from "@/sections/ServicesSection";
import AutoScrollingCards from "@/sections/AutoScrollingCards";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <ValuetoProduct />
      <IndustriesWeServe />
      <AutoScrollingCards />
      <LogoTicker />
      <TestimonialSection />
      <ContactSection />
      <QuoteSection />
      <Footer />
    </>
  );
}
