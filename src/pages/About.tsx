import { Mail, Users, Target, Heart, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import fabianImage from "@/assets/fabian-louis-professional.jpg";
import graceImage from "@/assets/grace-wanjiku.jpg";
import davidImage from "@/assets/david-kimani.jpg";
import nairobiSkyline from "@/assets/nairobi-skyline.jpg";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We prioritize depth and accuracy over quantity, ensuring every article provides real value to our readers."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our content is shaped by our community's needs and interests, creating a truly collaborative platform."
    },
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "We believe in the power of continuous learning and sharing knowledge to drive innovation and growth."
    },
    {
      icon: Award,
      title: "Excellence in Design",
      description: "Beautiful, accessible design that enhances the reading experience and makes content discovery effortless."
    }
  ];

  const stats = [
    { label: "Articles Published", value: "50+" },
    { label: "Monthly Readers", value: "5K+" },
    { label: "Contributors", value: "3+" },
    { label: "Countries Reached", value: "15+" }
  ];

  const team = [
    {
      name: "Fabian Louis",
      role: "Founder & Editor-in-Chief",
      bio: "Passionate storyteller and tech enthusiast dedicated to sharing Kenya's innovative spirit with the world.",
      image: fabianImage
    },
    {
      name: "Grace Wanjiku", 
      role: "Content Strategist",
      bio: "Creative writer focused on highlighting Kenya's cultural renaissance and social innovation.",
      image: graceImage
    },
    {
      name: "David Kimani",
      role: "Technology Editor",
      bio: "Tech journalist covering Kenya's digital transformation and startup ecosystem.",
      image: davidImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Fab - Tech Innovator & Content Creator"
        description="Learn about Fab, a passionate tech innovator and content creator sharing insights on technology, business, and innovation in Kenya and beyond."
        keywords={['Fab blog author', 'tech innovator Kenya', 'content creator', 'technology writer']}
      />
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6"
          >
            About Catch Up with Fab
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We are a passionate team from Kenya dedicated to sharing stories that matter. 
            Founded in 2025, our mission is to keep you informed about Kenya's dynamic growth, 
            innovation, and cultural renaissance while connecting local stories to global conversations.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Catch Up with Fab was born from a vision to showcase Kenya's incredible transformation 
                    and innovation to the world. As a young nation brimming with talent and opportunity, 
                    we believe Kenya's stories deserve a global audience.
                  </p>
                  <p>
                    Starting in 2025, our Kenyan team set out to create a platform that would highlight 
                    the country's technological breakthroughs, economic growth, and vibrant cultural scene. 
                    From Nairobi's thriving startup ecosystem to grassroots innovations across the country, 
                    we cover the stories that define modern Kenya.
                  </p>
                  <p>
                    Today, we're proud to serve readers worldwide who want to understand Kenya's journey 
                    and its role in shaping Africa's future. Every article reflects our commitment to 
                    authentic storytelling and quality journalism.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={nairobiSkyline}
                  alt="Nairobi skyline representing Kenya's growth"
                  className="rounded-lg shadow-soft"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission to share Kenya's story with authenticity and purpose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-elevated text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to quality content and community growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate Kenyan team behind Catch Up with Fab, each bringing unique perspectives 
              on our country's evolution and global connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-featured max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Join Our Community
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're interested in Kenya's growth story or want to contribute your own insights, 
                we'd love to have you join our growing community of readers and contributors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-accent">
                  <Mail className="h-4 w-4 mr-2" />
                  Get in Touch
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Start Reading
                </Button>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;