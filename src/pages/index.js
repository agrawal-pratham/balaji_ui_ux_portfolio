import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const imagesPath = [
    "/images/letter_b.png",
    "/images/letter_a.png",
    "/images/letter_l.png",
    "/images/letter_a.png",
    "/images/letter_j.png",
    "/images/letter_i.png",
  ];

  return (
    <>
      <Head>
        <title>Balaji UXUI</title>
      </Head>
      <section className="flex h-screen items-center justify-center text-white relative">
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-white opacity-10"
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 1, delay: 3 }}
        />
        <div className="max-w-full px-2 md:w-1/2  flex flex-col items-center text-center z-10">
          <div className="mb-4 gap-2 flex overflow-hidden">
            {imagesPath.map((letter, index) => (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="origin-bottom"
                transition={{ duration: 1, delay: 3 + index * 0.1 }}
              >
                <img
                  loading="eager"
                  src={letter}
                  key={index}
                  className={`object-fill h-20 md:h-28 transition-all ease-in duration-1000`}
                />
              </motion.div>
            ))}
          </div>
          <h2 className="text-2xl mb-4 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              className="origin-bottom "
              transition={{ duration: 1, delay: 3.25 }}
            >
              UX/UI Designer
            </motion.div>
          </h2>
          <p className="text-sm mb-6 max-w-screen-lg  tracking-widest mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="origin-top-right"
              transition={{ duration: 2, delay: 3.5 }}
            >
              Worked for 2 years on 8+ industrial projects, specializing in
              transforming client ideas into user-friendly products. Product
              designer for Slato, an In-house e-learning mobile app
            </motion.div>
          </p>
          {/* <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Competitor research and user identification
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">
              Gat
            </button>
          </div> */}
          <p className="mt-6 italic">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="origin-right"
              transition={{ duration: 1, delay: 3.5 }}
            >
              "Turning Ideas into Engaging User Journeys"
            </motion.div>
          </p>
        </div>
      </section>
    </>
  );
}
