import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Users2, Target } from "lucide-react";
import teacherReading from "@/assets/teacher-reading.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in early childhood education and care.",
    },
    {
      icon: Users2,
      title: "Community",
      description: "Building strong relationships with families and creating a supportive environment.",
    },
    {
      icon: Target,
      title: "Development",
      description: "Focusing on each child's individual growth across all developmental areas.",
    },
    {
      icon: Clock,
      title: "Consistency",
      description: "Providing reliable, quality care that parents can depend on every day.",
    },
  ];

  const staff = [
    {
      name: "Jennifer Martinez",
      role: "Director",
      credentials: "M.Ed. in Early Childhood Education, 15+ years experience",
    },
    {
      name: "Emily Thompson",
      role: "Lead Teacher - Toddlers",
      credentials: "B.A. in Child Development, CPR & First Aid Certified",
    },
    {
      name: "Michael Johnson",
      role: "Lead Teacher - Preschool",
      credentials: "B.S. in Education, Montessori Certified",
    },
    {
      name: "Sarah Williams",
      role: "Assistant Director",
      credentials: "B.A. in Psychology, 10+ years in childcare",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-cool text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Little Stars Daycare</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 15 years, we've been dedicated to providing exceptional early childhood 
            education in a warm, nurturing environment where every child can thrive.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Little Stars Daycare, our mission is to provide a safe, nurturing, and stimulating 
                environment where children can explore, learn, and grow. We believe that every child 
                is unique and deserves individualized attention and care.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We partner with families to support the whole child—socially, emotionally, physically, 
                and intellectually. Our play-based curriculum is designed to inspire curiosity, build 
                confidence, and foster a lifelong love of learning.
              </p>
              <p className="text-lg text-muted-foreground">
                Through positive interactions, engaging activities, and a deep respect for each child's 
                developmental journey, we create lasting memories and prepare children for future success.
              </p>
            </div>
            <div>
              <img 
                src={teacherReading} 
                alt="Teacher reading to children" 
                className="rounded-3xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Little Stars Daycare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-warm rounded-full flex items-center justify-center">
                    <value.icon size={32} className="text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced, certified educators are passionate about early childhood development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-cool rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.credentials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed with children's safety, comfort, and development in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Indoor Spaces</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bright, spacious classrooms</li>
                  <li>• Age-appropriate learning areas</li>
                  <li>• Reading nooks and quiet spaces</li>
                  <li>• Creative arts and crafts station</li>
                  <li>• Secure entry system</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Outdoor Spaces</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Safe, fenced playground</li>
                  <li>• Age-appropriate play equipment</li>
                  <li>• Garden and nature exploration area</li>
                  <li>• Shaded areas for outdoor learning</li>
                  <li>• Soft-surface play areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
