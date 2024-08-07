import "@/styles/globals.css";
import { Lato, Montserrat } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  preload: true,
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true,
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${lato.variable} ${montserrat.variable} font-lato`}>
      <Component {...pageProps} />
    </main>
  );
}
