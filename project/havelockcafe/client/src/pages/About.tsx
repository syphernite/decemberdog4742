import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Leaf, Coffee, Home } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared fresh with care and attention to detail. We believe that great food starts with passion and dedication to our craft.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Proud to serve our neighbors and support local suppliers. We're more than a cafe - we're part of the Havelock family and committed to giving back.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality. From our coffee beans to our produce, only the freshest and finest ingredients make it to your plate.",
    },
    {
      icon: Leaf,
      title: "Fresh & Local",
      description: "We source ingredients from local farms whenever possible, supporting our community and ensuring maximum freshness in every meal.",
    },
    {
      icon: Coffee,
      title: "Perfect Atmosphere",
      description: "Our cafe features natural light, wooden tables, and local artwork creating a warm, inviting space where you'll feel right at home.",
    },
    {
      icon: Home,
      title: "Your Second Home",
      description: "Whether you're starting your day with breakfast or enjoying lunch with friends, we strive to make every visit feel like coming home.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4" data-testid="badge-about">
              About Us
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A neighborhood cafe built on community, quality, and the simple joy of good food
            </p>
          </div>

          <div className="mb-20 p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                Welcome to Havelock Cafe, where every meal is made with love and served with a smile. 
                Our journey began with a simple vision: to create a warm, welcoming space where the 
                Havelock community could gather for delicious, homemade food.
              </p>
              <p>
                Step inside and you'll find clean, inviting interiors with wooden tables bathed in 
                natural light. Local artwork adorns our walls, showcasing the incredible talent in our 
                community. Whether you're grabbing a quick coffee, enjoying a leisurely breakfast, or 
                meeting friends for lunch, our cafe provides the perfect backdrop.
              </p>
              <p>
                We're proud to be part of the Havelock community. Our commitment to quality means we 
                work with local suppliers whenever possible, ensuring the freshest ingredients while 
                supporting our neighbors. From farm-fresh eggs to locally roasted coffee, every item 
                on our menu reflects our dedication to excellence.
              </p>
              <p className="font-semibold text-foreground">
                More than just a cafe, we're a gathering place—a home away from home where good food 
                and good company come together. We can't wait to welcome you.
              </p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 hover-elevate transition-all" data-testid={`card-about-value-${index}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
