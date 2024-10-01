import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Balaji UXUI</title>
      </Head>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="h-2/5 md:h-1/2 aspect-square rounded-full border border-white opacity-10 transition-all duration-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1 }}
          />
        </div>
        <section
          id="content"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Section 1</h1>
        </section>
        <section
          id="content-2"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Section 2</h1>
        </section>
      </div>
    </>
  );
}
