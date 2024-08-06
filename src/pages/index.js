import Headers from "@/components/Shared/Headers";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export default function Home() {
  return (
    <>
      <main className={`${lato.className}`}>
        <Headers />
        <section id="content" className="container pt-16 mx-auto">
          {" "}
          Hello
        </section>
        {/* <Footer /> */}
      </main>
    </>
  );
}
