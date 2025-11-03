import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Menu() {
  const breakfastItems = [
    { name: "Classic Breakfast", description: "Two eggs any style, bacon or sausage, toast", price: "$9.99" },
    { name: "Pancake Stack", description: "Three fluffy buttermilk pancakes with syrup and butter", price: "$8.49" },
    { name: "Veggie Omelet", description: "Three-egg omelet with peppers, onions, mushrooms, cheese", price: "$10.99" },
    { name: "French Toast", description: "Thick-cut French toast with fresh berries", price: "$9.49" },
    { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, peppers, choice of meat", price: "$10.49" },
    { name: "Avocado Toast", description: "Smashed avocado on artisan bread with poached eggs", price: "$11.99" },
  ];

  const lunchItems = [
    { name: "Club Sandwich", description: "Triple-decker with turkey, bacon, lettuce, tomato", price: "$11.99" },
    { name: "Grilled Chicken Wrap", description: "Grilled chicken, mixed greens, ranch dressing", price: "$10.99" },
    { name: "BLT", description: "Crispy bacon, fresh lettuce, tomato on toasted bread", price: "$9.99" },
    { name: "Tuna Melt", description: "House-made tuna salad with melted cheese", price: "$10.49" },
    { name: "Garden Salad", description: "Mixed greens, vegetables, choice of dressing", price: "$8.99" },
    { name: "Soup & Sandwich Combo", description: "Cup of daily soup with half sandwich", price: "$11.49" },
  ];

  const beverages = [
    { name: "Fresh Brewed Coffee", description: "Locally roasted, regular or decaf", price: "$2.99" },
    { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "$4.49" },
    { name: "Latte", description: "Espresso with steamed milk", price: "$4.99" },
    { name: "Fresh Squeezed Orange Juice", description: "Made to order", price: "$4.99" },
    { name: "Iced Tea", description: "Sweetened or unsweetened", price: "$2.99" },
    { name: "Specialty Smoothie", description: "Ask about our daily flavors", price: "$5.99" },
  ];

  const MenuSection = ({ title, items, testId }: { title: string; items: typeof breakfastItems; testId: string }) => (
    <div className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="p-6" data-testid={`${testId}-${index}`}>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold">{item.name}</h4>
              <span className="text-lg font-bold text-primary ml-4">{item.price}</span>
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4" data-testid="badge-menu-page">
              Our Menu
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Delicious Choices
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All items made fresh to order with quality ingredients
            </p>
          </div>

          <MenuSection title="Breakfast" items={breakfastItems} testId="item-breakfast" />
          <MenuSection title="Lunch" items={lunchItems} testId="item-lunch" />
          <MenuSection title="Beverages" items={beverages} testId="item-beverage" />

          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <p className="text-muted-foreground">
              <strong>Note:</strong> Menu items and prices subject to change. Ask about our daily specials!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
