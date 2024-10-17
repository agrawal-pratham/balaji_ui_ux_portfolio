import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const LineAnimation = ({ position, delay }) => {
  return (
    <motion.div
      className="fixed top-0 bottom-0 w-px z-0 bg-white opacity-10"
      style={{ left: `${position}%` }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1, delay, ease: "easeInOut" }}
    />
  );
};

export default function Layout({ children }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/cloud_bg.jpg";
    img.onload = () => setImageLoaded(true);
  }, []);

  const backgroundVariants = {
    initial: { scale: 1.2 },
    animate: { scale: 1 },
  };

  return (
    <div className="min-h-screen relative">
      <motion.div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/cloud_bg.jpg')",
        }}
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {imageLoaded && (
        <>
          <div className="fixed inset-0 backdrop-blur-[1px] transition-all duration-500 z-0">
            {[16.67, 33.33, 50, 66.67, 83.33].map((position, i) => (
              <LineAnimation key={i} position={position} delay={i * 0.2 + 1} />
            ))}
            <motion.div
              className="relative z-20 min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              {children}
            </motion.div>
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-30"
              initial={{ y: "calc(100vh - 5%)" }}
              animate={{ y: "100%" }}
              transition={{ duration: 2 }}
            >
              <NavBar />
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
