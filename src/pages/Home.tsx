import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Heart, Users, BookOpen, Shield } from "lucide-react";
import heroVideo from "@/assets/hero-daycare.mp4";


const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "We provide a warm, loving atmosphere where every child feels safe and valued.",
    },
    {
      icon: Users,
      title: "Experienced Staff",
      description: "Our certified educators are passionate about early childhood development.",
    },
    {
      icon: BookOpen,
      title: "Educational Programs",
      description: "Age-appropriate curriculum that promotes learning through play.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Secure facilities with comprehensive safety measures for your peace of mind.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Little Stars has been amazing for our daughter. She's learning so much and always excited to go!",
    },
    {
      name: "Michael Chen",
      text: "The staff is incredibly caring and professional. We couldn't ask for a better daycare.",
    },
    {
      name: "Emily Rodriguez",
      text: "The educational programs are excellent. Our son has grown so much since joining.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float">
            Master English Reading and Writing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            English Reading and Writing Classes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-full text-lg px-8">
              <NavLink to="/contact">Schedule a Tour</NavLink>
            </Button>
            <Button size="lg" variant="secondary" asChild className="rounded-full text-lg px-8">
              <NavLink to="/programs">View Programs</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TelliOnSat?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best start for your child's learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-cool rounded-full flex items-center justify-center">
                    <feature.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}


      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Parents Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from families who trust us with their little stars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cool text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a tour today and see why parents choose TelliOnSat for their children
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full text-lg px-8">
            <NavLink to="/contact">Contact Us Today</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
