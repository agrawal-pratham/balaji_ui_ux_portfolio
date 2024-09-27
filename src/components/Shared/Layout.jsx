import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/clouds_bg.webp";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-color">
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/clouds_bg.webp')",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {imageLoaded && (
        <motion.main
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
          <NavBar />
        </motion.main>
      )}
    </div>
  );
}
