import { useEffect, useState } from "react";

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
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300 ${
        isVideoEnded ? 'opacity-0' : 'opacity-100'
      }`}
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
    </div>
  );
};

export default LoadingScreen;
