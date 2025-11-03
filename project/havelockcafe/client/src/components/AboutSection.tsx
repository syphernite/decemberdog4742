import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Leaf, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish prepared fresh with care and attention",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Proudly serving our Havelock neighbors since day one",
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "Fresh, locally-sourced ingredients in every meal",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Supporting local farms and sustainable practices",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your Neighborhood Cafe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Havelock Cafe, we believe in the power of good food to bring people together. 
            Our cozy cafe features clean interiors with wooden tables, bright natural light, 
            and local artwork—creating a warm, welcoming atmosphere where you can enjoy 
            delicious breakfast and lunch with friends and family.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="p-6 text-center hover-elevate transition-all" data-testid={`card-feature-${index}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Open Hours</h3>
            <div className="space-y-2 text-lg">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Saturday</span>
                <span className="font-semibold">7AM - 3PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10">
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
            <p className="text-lg mb-2">
              <span className="font-semibold">1000 E Main St</span>
            </p>
            <p className="text-lg text-muted-foreground mb-4">Havelock, NC 28532</p>
            <a href="tel:252-652-6115" className="text-lg font-semibold text-primary hover:underline">
              (252) 652-6115
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
