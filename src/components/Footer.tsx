import { Link } from "react-router-dom";
import { Mail, Twitter, Facebook, Linkedin, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    blog: [
      { name: "All Posts", href: "/blog" },
      { name: "Technology", href: "/categories/technology" },
      { name: "Design", href: "/categories/design" },
      { name: "Business", href: "/categories/business" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    social: [
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "Facebook", href: "#", icon: Facebook },
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "GitHub", href: "#", icon: Github },
    ],
  };

  return (
    <footer className="bg-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-card-elevated rounded-lg p-8 mb-12 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest articles and insights delivered straight to your inbox. No spam, just quality content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background border-border"
            />
            <Button className="btn-accent">Subscribe</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MB</span>
              </div>
              <span className="font-heading text-xl font-semibold text-foreground">
                ModernBlog
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              A modern publishing platform designed for content creators who value beautiful design, 
              powerful features, and seamless user experience.
            </p>
            <div className="flex items-center space-x-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 hover:bg-accent-soft rounded-lg"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Blog Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Blog</h4>
            <ul className="space-y-2">
              {footerLinks.blog.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} ModernBlog. Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>for content creators</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="mailto:hello@modernblog.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span>hello@modernblog.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;