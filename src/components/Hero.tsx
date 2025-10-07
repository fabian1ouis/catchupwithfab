import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);
  }, []);

  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "150+" },
    { icon: Users, label: "Active Readers", value: "10K+" },
    { icon: TrendingUp, label: "Monthly Growth", value: "25%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const title = "Welcome to";
  const subtitle = "Catch Up with Fab";

  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <motion.div 
        style={{ y, opacity }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </motion.div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight overflow-hidden"
            >
              <motion.span className="block">
                {title.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: i * 0.03,
                      duration: 0.5,
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent"
              >
                {subtitle.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: (title.length + i) * 0.03,
                      duration: 0.5,
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              Your personal gateway to insights, stories, and conversations that matter. 
              Discover fresh perspectives on technology, life, and everything in between.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="btn-accent text-lg px-8 py-4">
                  <Link to="/blog">
                    Start Reading
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-primary">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center lg:text-left"
                  >
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <Icon className="h-5 w-5 text-accent mr-2" />
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Decorative Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: "Expert Insights", desc: "Deep-dive analysis from industry thought leaders", delay: 0 },
                  { icon: TrendingUp, title: "Future Trends", desc: "Anticipate what's next in your industry", delay: 1, mt: "mt-8" },
                  { icon: Users, title: "Global Network", desc: "Connect with innovators worldwide", delay: 2, mt: "-mt-4" },
                  { icon: ArrowRight, title: "Always Learning", desc: "Continuous updates across all devices", delay: 3, mt: "mt-4" }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ${card.mt || ''}`}
                  >
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center"
                    >
                      <card.icon className="h-6 w-6 text-accent-foreground" />
                    </motion.div>
                    <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-white/80 text-sm">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/10 rounded-full blur-2xl" 
      />
    </section>
  );
};

export default Hero;