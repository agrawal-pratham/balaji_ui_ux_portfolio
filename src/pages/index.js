import Footer from "@/components/Shared/Footer";
import Headers from "@/components/Shared/Headers";

export default function Home() {
  return (
    <>
      <main>
        <Headers />
        <section id="content" className="container pt-16 mx-auto">
          {" "}
          Hello
        </section>
        <Footer />
      </main>
    </>
  );
}
