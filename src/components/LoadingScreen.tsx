import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    if (isVideoEnded) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVideoEnded, onLoadingComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: isVideoEnded ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoEnded(true)}
          className="w-64 h-64 object-contain rounded-lg"
        >
          <source src="/logo.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
