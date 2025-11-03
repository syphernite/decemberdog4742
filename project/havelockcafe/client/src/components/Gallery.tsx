import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Image, Coffee, Users, Sun, Palette, Armchair } from "lucide-react";
import { motion } from "framer-motion";

export default function Gallery() {
  const highlights = [
    {
      icon: Sun,
      title: "Natural Light",
      description: "Bright, airy dining space with large windows",
    },
    {
      icon: Armchair,
      title: "Wooden Tables",
      description: "Cozy seating with rustic wooden furniture",
    },
    {
      icon: Palette,
      title: "Local Artwork",
      description: "Featuring work from Havelock artists",
    },
    {
      icon: Coffee,
      title: "Outdoor Seating",
      description: "Enjoy your meal on our welcoming patio",
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "A gathering place for neighbors and friends",
    },
    {
      icon: Image,
      title: "Warm Atmosphere",
      description: "Earth tones and inviting decor throughout",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-atmosphere">
            Our Atmosphere
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            A Welcoming Space
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the charm and warmth of Havelock Cafe
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card
                  className="p-8 hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-highlight-${index}`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground text-lg">{highlight.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="mt-16 p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-background text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-4">See It For Yourself</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Words can only do so much—come visit us and experience the inviting atmosphere 
            of Havelock Cafe firsthand. We can't wait to welcome you!
          </p>
          <a
            href="/location"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 py-4 text-lg font-semibold hover-elevate active-elevate-2 transition-all"
            data-testid="button-visit-cta"
          >
            Visit Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
