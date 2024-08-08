import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Hero from "@/components/Home/Hero/Hero";
import IndustryWork from "@/components/Home/IndustryWork/IndustryWork";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Balaji UXUI</title>
      </Head>
      <section id="content" className="">
        <Hero />
        <IndustryWork />
        <CaseStudy />
        <Testimonials />
      </section>
    </>
  );
}
