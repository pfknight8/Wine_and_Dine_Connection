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
      name: "Bread Pudding",
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
    {
      name: "Caprese Salad",
      description: "A mediterranean classic; tomatoes, mozzarella, and basil drizzed with balsamic.",
      category: "Appetizer",
      image: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      wine_pairs: {
        sweetness: ["Dry", "Off-Dry", "Medium"],
        varietals: ["Sangiovese", "Grenache/Syrah/Mourvedre", "Merlot", "Sauvignon Blanc", "Pinot Gris", "Nero d'Avola", "Zinfandel", "Prosecco"],
      },
    },
    {
      name: "Edam",
      description: "Edam ages and travels well, and does not spoil; it only hardens. Young Edam cheese sold in stores has a very mild flavour, slightly salty or nutty, and almost no smell when compared to other cheeses. As the cheese ages, its flavour sharpens, and it becomes firmer. Mild Edam goes well with fruit such as peaches, melons, apricots, and cherries.",
      category: "Cheeses",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/SmallEdamCheese.jpg/1920px-SmallEdamCheese.jpg",
      wine_pairs: {
        sweetness: ["Dry", "Off-Dry", "Medium"],
        varietals: ["Pinot Noir", "Pinot Gris", "Chardonney", "Riesling", "Syrah", "Brut"],
      },
    },
    {
      name: "Provolone",
      description: "A semi-hard Italian cheese, it is afull-fat cow's milk cheese with a smooth skin.",
      category: "Cheeses",
      image: "https://i.imgur.com/86Id7aR.jpeg",
      wine_pairs: {
        sweetness: ["Dry", "Off-Dry", "Medium"],
        varietals: ["Gewurztraminer", "Gruner Veltliner", "Chardonney", "Riesling", "Syrah", "Prosecco", "Sauvignon Blanc", "Sangiovese"],
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