import { ReactNode, useCallback } from "react";
import confetti from "canvas-confetti";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { toast } from "sonner";
import Header from "./Header";
import Footer from "./Footer";
import SocialMediaChat from "./SocialMediaChat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const triggerConfetti = useCallback(() => {
    // Fire confetti from multiple angles
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    toast.success("🎮 Konami Code Activated!", {
      description: "You've unlocked the secret! Keep exploring...",
      duration: 5000,
    });
  }, []);

  useKonamiCode(triggerConfetti);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <SocialMediaChat />
    </div>
  );
};

export default Layout;