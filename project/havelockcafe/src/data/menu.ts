const menuData = {
  sections: [
    {
      title: 'Classic Breakfast',
      items: [
        { name: '2 Cracked Eggs', price: '$9.95', description: 'With choice of meat, home fries or grits and toast' },
        { name: 'The Classic', price: '$12.95', description: '2 Pancake or French Toast, 2 Eggs, Choice of Meat' },
        { name: 'Big Back Special', price: '$14.95', description: '2 Pancake or French Toast, 2 Eggs, 2 choices of Meats and home fries or Grits, toast' },
        { name: 'Breakfast Sandwich', price: '$9.95', description: '2 Eggs, American cheese, Choice of Meat — With Home fries or Grits' },
        { name: 'Breakfast Burrito', price: '$10.95', description: 'Onion, peppers, house sauce, choice of meat, 2 scrambled Eggs rolled into a Jumbo Flour Tortilla — With Home fries or Grits' },
        { name: 'Country Fried Steak', price: '$12.95', description: 'Lightly breaded beef served with sausage gravy, 2 Eggs, Home Fries or Grits and Toast' },
        { name: '2 Eggs Over Corned Beef Hash', price: '$11.95', description: 'Fresh corned beef hash with toast — Make it spicy add jalapeños and pepper jack cheese $3.00' }
      ]
    },
    {
      title: 'Make Your Own Omelette / Skillet',
      items: [
        { name: 'Make Your Own Omelette or Skillet', price: '$11.95', description: 'Comes with home fries and toast. Choose up to 5 ingredients. $0.95 each extra ingredient.' },
        {
          name: 'Omelette / Skillet Ingredients',
          description:
            'Bacon, Sausage, Ham, Corned beef, Mushrooms, Spinach, Onion, Peppers, Tomato, Cheddar cheese, American cheese, Cream cheese, Swiss, Pepper jack, Feta, Avocado, Zucchini'
        }
      ]
    },
    {
      title: 'Sweet Treats',
      items: [
        { name: 'Funnel Cake Pancake', price: '$12.95', description: 'Served with 2 Eggs and choice of meat' },
        { name: 'Banana Nut Pancake', price: '$12.95', description: 'Served with 2 Eggs and choice of meat' },
        { name: 'PB&J French Toast', price: '$12.95', description: 'Served with choice of meat' }
      ]
    },
    {
      title: 'Kids / Senior',
      items: [
        { name: 'Coffee, Milk, or Juice', price: '$2.00', description: '' },
        { name: '1 Egg, 1 Choice of Meat, and Home Fries with Toast', price: '$6.95' },
        { name: '1 Pancake or French Toast and 1 Choice of Meat', price: '$6.95' },
        { name: 'Chicken Tenders (2) Grilled or Fried with Fries', price: '$6.95' },
        { name: 'Plain Cheeseburger with Fries', price: '$6.95' }
      ]
    },
    {
      title: 'Sides',
      items: [
        { name: 'Fresh Fruit Cup', price: '$3.95' },
        { name: 'Grits', price: '$2.95', description: 'Add cheese $1.00' },
        { name: 'Home Fries', price: '$3.95', description: 'Add onion, peppers $2.00' },
        { name: 'Loaded Home Fries', price: '$5.95', description: 'With cheese and bacon' },
        { name: 'Plain Biscuit', price: '$2.95', description: 'Add sausage gravy $1.95' }
      ]
    },
    {
      title: 'Beverages',
      items: [
        { name: 'Coke products / Sweet or Unsweet Tea', description: '' },
        { name: 'Coffee / Hot tea', price: '$2.95' },
        { name: 'Water', description: '' },
        { name: 'Orange juice / Apple juice / Tomato juice', price: '$3.95', description: '$2.00 refills' },
        { name: 'Cold brew', price: '$5.95' }
      ]
    },
    {
      title: 'Hand Crafted Burgers',
      items: [
        { name: 'Bourbon BBQ Bacon Burger', price: '$11.95', description: 'Mayo, American cheese and fried onions' },
        { name: 'Mushroom Swiss', price: '$11.95', description: 'Mayo' },
        { name: 'Steak Style Burger', price: '$11.95', description: 'Grilled onions, mushrooms and A1 steak sauce' },
        { name: 'Pimento Bacon Burger', price: '$11.95', description: 'Mayo, Lettuce and Tomato' },
        { name: 'Carolina Burger', price: '$11.95', description: 'Mustard, raw onions, cheddar cheese, chili and slaw' },
        { name: 'Frisco Burger', price: '$11.95', description: 'Mayo, tomato, American cheese' },
        { name: 'Smoke Stack Burger', description: 'BBQ cheddar cheese and fried onion' },
        { name: 'Quesadilla Burger', price: '$11.95', description: 'Mix cheddar cheese, Tomato, onion, Lettuce and house sauce between two flour tortillas' },
        { name: 'Cheeseburger (Single)', price: '$10.95' },
        { name: 'Cheeseburger (Double)', price: '$14.95' },
        { name: 'Add Chili', price: '$2.00' },
        { name: 'Add Bacon', price: '$3.00' }
      ]
    },
    {
      title: 'Fresh Chicken',
      items: [
        { name: 'Chicken Tenders (2) Fried or Grilled', price: '$9.95', description: 'Comes with French fries and dipping sauce' },
        { name: 'Bacon Avocado Chicken Sandwich', price: '$11.95', description: 'Grilled chicken, bacon, avocado, Swiss. Lettuce, tomato, mayo on bun — With French fries' },
        { name: 'Nashville Chicken', price: '$11.95', description: 'Fried chicken tossed in Nashville hot sauce — With pickles and mayo on Texas toast — With French fries' },
        { name: 'Buffalo Chicken', price: '$10.95', description: 'Fried chicken tossed in house mild sauce — Mayo, Lettuce, Tomato on bun — With French fries' }
      ]
    },
    {
      title: 'Salads',
      items: [
        { name: 'House Salad', price: '$8.95', description: 'Mix lettuce, tomatoes, cucumbers, mixed cheddar cheese' },
        { name: 'Caesar', price: '$9.95', description: 'Bacon, Lettuce, croutons, parmesan cheese with Caesar dressing' },
        { name: 'Add Grilled or Fried Chicken / Shrimp / Chef Meats to any salad', price: '$4.95' }
      ]
    },
    {
      title: 'Sandwiches',
      items: [
        { name: 'Cheesesteak Sub', price: '$12.95', description: 'Steak, American cheese, mayo, grilled onions, peppers, lettuce, tomato, house dressing' },
        { name: 'Chicken Bacon Ranch Sub', price: '$12.95', description: 'Grilled chicken, bacon, mayo, American cheese and ranch' },
        { name: 'Reuben', price: '$11.95', description: 'Fresh corned beef, Swiss, 1000 island, sauerkraut on rye' },
        { name: 'Club Sandwich', price: '$11.95', description: 'Ham, turkey, roast beef, bacon, American cheese on Texas toast with mayo, lettuce and tomato' },
        { name: 'Patty Melt', price: '$11.95', description: '1000 island, grilled onions, American cheese on rye' },
        { name: 'BLT', price: '$9.95', description: 'Bacon strips, lettuce, tomatoes and mayo on Texas toast' },
        { name: 'BBQ Brisket Reuben', price: '$12.95', description: 'Brisket BBQ, 1000 island, coleslaw, cheddar cheese on Texas toast' }
      ]
    },
    {
      title: 'Seafood',
      items: [
        { name: 'Shrimp Burger', price: '$11.95', description: 'Ketchup, coleslaw — With French fries' },
        { name: 'Fish Sandwich', price: '$11.95', description: 'Tartar sauce, Lettuce and tomato on bun' },
        { name: 'Seafood Baskets — Pick 1', price: '$11.95', description: 'Served with French fries and slaw' },
        { name: 'Seafood Baskets — Pick 2', price: '$15.95' },
        { name: 'Add extra seafood items', price: '$5.95', description: 'Flounder, Shrimp, Scallops, Oysters, Clam strips' }
      ]
    }
  ]
};

export default menuData;
