import Layout from "@/components/Shared/Layout";
import "@/styles/globals.css";
import { Spline_Sans_Mono } from "next/font/google";

const spline_sans_mono = Spline_Sans_Mono({
  subsets: ["latin"],
  preload: true,
  variable: "--font-lato",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${spline_sans_mono.variable} font-lato`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
