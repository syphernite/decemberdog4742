import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coffee, Utensils, Soup, Sandwich, Egg, Salad } from "lucide-react";
import { motion } from "framer-motion";

export default function MenuPreview() {
  const menuItems = [
    {
      icon: Egg,
      title: "Breakfast Classics",
      items: [
        { name: "Farm Fresh Eggs", price: "$9.99" },
        { name: "Pancake Stack", price: "$8.49" },
        { name: "Breakfast Burrito", price: "$10.49" },
      ],
      color: "from-orange-500/10 to-yellow-500/10"
    },
    {
      icon: Sandwich,
      title: "Sandwiches",
      items: [
        { name: "Club Sandwich", price: "$11.99" },
        { name: "BLT Classic", price: "$9.99" },
        { name: "Tuna Melt", price: "$10.49" },
      ],
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Salad,
      title: "Fresh Salads",
      items: [
        { name: "Garden Salad", price: "$8.99" },
        { name: "Caesar Salad", price: "$9.99" },
        { name: "Chef's Special", price: "$11.99" },
      ],
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Soup,
      title: "Hot Entrees",
      items: [
        { name: "Daily Soup", price: "$6.99" },
        { name: "Grilled Chicken", price: "$12.99" },
        { name: "Combo Special", price: "$11.49" },
      ],
      color: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: Coffee,
      title: "Beverages",
      items: [
        { name: "Fresh Coffee", price: "$2.99" },
        { name: "Specialty Latte", price: "$4.99" },
        { name: "Fresh Juice", price: "$4.99" },
      ],
      color: "from-amber-500/10 to-orange-500/10"
    },
    {
      icon: Utensils,
      title: "Daily Specials",
      items: [
        { name: "Monday Special", price: "$9.99" },
        { name: "Weekend Brunch", price: "$13.99" },
        { name: "Chef's Choice", price: "$12.99" },
      ],
      color: "from-purple-500/10 to-indigo-500/10"
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="menu-preview" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-menu">
            Our Menu
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Made Fresh Daily
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every dish prepared with locally-sourced ingredients
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {menuItems.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card
                  className={`p-8 hover-elevate active-elevate-2 cursor-pointer transition-all bg-gradient-to-br ${category.color}`}
                  data-testid={`card-menu-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-baseline">
                        <span className="text-base">{item.name}</span>
                        <span className="text-base font-semibold text-primary ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" variant="default" asChild className="rounded-full px-10 py-7 text-lg" data-testid="button-full-menu">
            <a href="/menu">Explore Full Menu</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
