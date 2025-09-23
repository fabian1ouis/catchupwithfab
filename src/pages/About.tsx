import { Mail, Users, Target, Heart, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    { label: "Articles Published", value: "150+" },
    { label: "Monthly Readers", value: "10K+" },
    { label: "Expert Contributors", value: "25+" },
    { label: "Countries Reached", value: "50+" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Editor-in-Chief",
      bio: "Former tech lead turned writer, passionate about making complex topics accessible.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Design Lead",
      bio: "UX designer focused on creating inclusive and beautiful reading experiences.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Thompson",
      role: "Business Editor",
      bio: "Serial entrepreneur sharing insights on building sustainable businesses.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            About ModernBlog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a community of passionate writers, designers, and thinkers dedicated to sharing 
            knowledge that matters. Our mission is to create a platform where quality content 
            meets beautiful design, making learning both enjoyable and accessible.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    ModernBlog was born from a simple observation: the internet was full of content, 
                    but much of it lacked depth, clarity, or beautiful presentation. We wanted to 
                    create something different.
                  </p>
                  <p>
                    Starting in 2023, we set out to build a platform that would prioritize quality 
                    over quantity, design over clutter, and community over algorithms. Every article 
                    is carefully crafted, every design decision is intentional, and every reader 
                    interaction is valued.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of readers worldwide, providing insights 
                    on technology, design, business, and lifestyle that actually make a difference 
                    in people's lives and careers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Modern workspace with laptop and coffee"
                  className="rounded-lg shadow-soft"
                />
              </div>
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
              The principles that guide everything we do, from content creation to community building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-elevated text-center">
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
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
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
              The passionate individuals behind ModernBlog, each bringing unique expertise and perspective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="card-elevated text-center">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="card-featured max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Join Our Community
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a reader looking for quality content or a writer wanting to share your expertise, 
                we'd love to have you join our growing community.
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
        </div>
      </section>
    </div>
  );
};

export default About;