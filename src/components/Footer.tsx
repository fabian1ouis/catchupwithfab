import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Categories", href: "/categories" },
  ];

  const categories = [
    { name: "Technology", href: "/categories/technology" },
    { name: "Design", href: "/categories/design" },
    { name: "Business", href: "/categories/business" },
    { name: "Lifestyle", href: "/categories/lifestyle" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">CF</span>
              </div>
              <span className="font-heading text-2xl font-semibold">
                Catch Up with Fab
              </span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Your gateway to insights, innovation, and inspiration. Join the conversation 
              about technology, design, business, and life.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:fabianlouis99@gmail.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  fabianlouis99@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href="tel:+254718112530" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  +254 718 112 530
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-heading text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Catch Up with Fab. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Built with passion and innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;