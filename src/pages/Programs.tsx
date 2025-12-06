import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Baby, Smile, GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import heroVideo from "@/assets/hero-programs.mp4";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Infant Care",
      ageRange: "6 weeks - 18 months",
      description: "Gentle, responsive care for your littlest stars. We provide a calm, nurturing environment with individualized attention to each baby's needs and schedule.",
      features: [
        "Low caregiver-to-infant ratio (1:3)",
        "Daily reports and photos for parents",
        "Safe sleep practices",
        "Age-appropriate sensory activities",
        "Flexible feeding schedules",
      ],
      schedule: "Full-time and part-time options available",
    },
    {
      icon: Smile,
      title: "Toddler Program",
      ageRange: "18 months - 3 years",
      description: "Active exploration and discovery for growing toddlers. We encourage independence, social skills, and early learning through play-based activities.",
      features: [
        "Small group sizes (1:6 ratio)",
        "Potty training support",
        "Language development activities",
        "Creative arts",
        "Outdoor play and gross motor activities",
      ],
      schedule: "Monday-Friday, 13:00 - 17:00",
    },
    {
      icon: GraduationCap,
      title: "Preschool Program",
      ageRange: "3 - 5 years",
      description: "Kindergarten readiness with a focus on social, emotional, and academic development. Our structured curriculum prepares children for future success.",
      features: [
        "Early literacy and math concepts",
        "STEM activities and experiments",
        "Social-emotional learning",
        "Pre-writing and fine motor skills",
        "School readiness assessment",
      ],
      schedule: "Half-day and full-day options available",
    },
    {
      icon: BookOpen,
      title: "Primary School Program",
      ageRange: "6 - 12 years",
      description: "Building a strong foundation in literacy, numeracy, and critical thinking through engaging, student-centered learning.",
      features: [
        "Core subject mastery (Math, English, Science)",
        "Homework assistance and tutoring",
        "Project-based learning activities",
        "Character building and social skills",
        "Educational games and technology",
      ],
      schedule: "Monday-Friday, 13:00 - 17:00",
    },
    {
      icon: Award,
      title: "Early High School",
      ageRange: "13 - 15 years",
      description: "Advanced academic support and skill development to prepare students for senior high school and future success.",
      features: [
        "Subject-specific tutoring",
        "Exam preparation strategies",
        "Leadership development",
        "Career exploration workshops",
        "Study skills and time management",
      ],
      schedule: "Monday-Friday, 13:00 - 17:00",
    },
  ];

  const additionalServices = [
    {
      title: "Extended Hours",
      description: "Early drop-off and late pick-up available for working families",
    },
    {
      title: "Nutritious Meals",
      description: "Healthy breakfast, lunch, and snacks included in tuition",
    },
    {
      title: "Summer Camp",
      description: "Special summer programming for enrolled children",
    },
    {
      title: "Parent Resources",
      description: "Regular newsletters, workshops, and family events",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Age-appropriate programs designed to nurture every stage of your child's early development
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-soft transition-shadow">
                <CardHeader className="bg-muted">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-cool rounded-full flex items-center justify-center flex-shrink-0">
                      <program.icon size={32} className="text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl mb-2">{program.title}</CardTitle>
                      <p className="text-primary font-semibold">{program.ageRange}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-6">{program.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Program Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Calendar className="text-primary" size={20} />
                        Schedule:
                      </h4>
                      <p className="text-muted-foreground">{program.schedule}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Extra support and resources for our Tellionsat families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Sample */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sample Daily Schedule</h2>
            <p className="text-xl text-muted-foreground">
              A typical day at Tellionsat (Preschool Program)
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { time: "13:00 - 13:30", activity: "Arrival & Free Play" },
                  { time: "13:30 - 14:15", activity: "English Reading & Writing" },
                  { time: "14:15 - 15:00", activity: "Creative Arts & Activities" },
                  { time: "15:00 - 15:30", activity: "Snack & Break" },
                  { time: "15:30 - 16:30", activity: "Group Projects & Learning" },
                  { time: "16:30 - 17:00", activity: "Quiet Time & Departure" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
                    <span className="font-semibold text-primary">{item.time}</span>
                    <span className="text-muted-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cool text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Enrolling?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a tour and learn more about our programs
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full text-lg px-8">
            <NavLink to="/contact">Get in Touch</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
