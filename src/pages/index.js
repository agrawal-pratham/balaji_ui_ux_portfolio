import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Hero from "@/components/Home/Hero/Hero";
import IndustryWork from "@/components/Home/IndustryWork/IndustryWork";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <section id="content" className="">
        <Hero />
        <IndustryWork />
        <CaseStudy />
        <Testimonials />
      </section>
    </>
  );
}
