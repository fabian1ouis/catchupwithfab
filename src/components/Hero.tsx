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
              Modern Publishing
              <span className="block text-accent">Made Simple</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Discover insightful articles on technology, design, business, and lifestyle. 
              Join our community of forward-thinking creators and innovators.
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
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Quality Content</h3>
                  <p className="text-white/80 text-sm">In-depth articles written by industry experts</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-8">
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Latest Trends</h3>
                  <p className="text-white/80 text-sm">Stay updated with industry trends and insights</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 -mt-4">
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Community</h3>
                  <p className="text-white/80 text-sm">Join a community of passionate learners</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-4">
                  <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Easy Access</h3>
                  <p className="text-white/80 text-sm">Read anywhere, anytime on any device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;