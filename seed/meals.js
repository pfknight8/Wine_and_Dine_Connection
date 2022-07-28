const db = require('../db')
const { Meal } = require('../models')

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const main = async () => {
  const meals = [
    {
      name: "Cheeseburger",
      description: "American standard fare.",
      category: "Main Course",
      image: "",
      wine_pairs: {
        sweetness: ["Dry", "Medium", "Off-Dry"],
        varietals: ["Merlot", "Cabernet Sauvignon", "Grenache", "Malbec", "Zinfandel", "Chardonney", "Brut"],
      },
    },
    {
      name: "A dessert",
      description: "A tasty after meal treat!",
      category: "Dessert",
      image: "",
      wine_pairs: {
        sweetness: [""],
        varietals: ["Tawny Port"],
      },
    },
    {
      name: "Shrimp Cocktail",
      description: "A simple, classic starter that is perfect for sharing.",
      category: "Appetizer",
      image: "https://i.imgur.com/Jt6h3.jpeg",
      wine_pairs: {
        sweetness: ["Off-Dry", "Medium", "Sweet"],
        varietals: ["Pinot Gris", "Prosecco", "Riesling", "Sauvignon Blanc", "Muscadet"],
      },
    },
  ]
  await Meal.insertMany(meals);
  console.log("Created Some Meals!");
};
const run = async () => {
  await main();
  db.close();
};

run();