import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "150+" },
    { icon: Users, label: "Active Readers", value: "10K+" },
    { icon: TrendingUp, label: "Monthly Growth", value: "25%" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent animate-shimmer">Catch Up with Fab</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your personal gateway to insights, stories, and conversations that matter. 
              Discover fresh perspectives on technology, life, and everything in between.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild className="btn-accent text-lg px-8 py-4">
                <Link to="/blog">
                  Start Reading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <Icon className="h-5 w-5 text-accent mr-2" />
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              {/* Decorative Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover-lift animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center animate-pulse-glow">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Expert Insights</h3>
                  <p className="text-white/80 text-sm">Deep-dive analysis from industry thought leaders</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-8 hover-lift animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center animate-float">
                    <TrendingUp className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Future Trends</h3>
                  <p className="text-white/80 text-sm">Anticipate what's next in your industry</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 -mt-4 hover-lift animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center animate-pulse-glow">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Global Network</h3>
                  <p className="text-white/80 text-sm">Connect with innovators worldwide</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-4 hover-lift animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center animate-float">
                    <ArrowRight className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Always Learning</h3>
                  <p className="text-white/80 text-sm">Continuous updates across all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
    </section>
  );
};

export default Hero;