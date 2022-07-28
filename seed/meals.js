const db = require('../db')
const { Meal } = require('../models')

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const main = async () => {
  const meals = [
    {
      name: "A meal",
      description: "Oh, a tasty meal!",
      category: "Main Course",
      image: "",
      wine_pairs: {
        sweetness: "Medium",
        varietals: ["Merlot", "Cabernet Sauvignon"],
      },
    },
    {
      name: "A dessert",
      description: "A tasty after meal treat!",
      category: "Dessert",
      image: "",
      wine_pairs: {
        sweetness: "",
        varietals: ["Tawny Port"],
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