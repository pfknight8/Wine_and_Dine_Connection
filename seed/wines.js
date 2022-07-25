const db = require("../db")
const { Wine } = require("../models")

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const main = async () => {
  const wines = [
    {
      name: "A wine",
      description: "Delicious, good with beef",
      varietal: "Cabernet Sauvignon",
      category: "Red",
      country: "USA",
      region: "Napa",
      sweetness: "Medium",
      price_range: "$$",
      image: "",
    },
    {
      name: "B wine",
      description: "Delicate, intensely mineral. Good with Turkey",
      varietal: "Riesling",
      category: "White",
      country: "Germany",
      region: "Mosel",
      sweetness: "Dry",
      price_range: "$$",
      image: "",
    },
  ]
  await Wine.insertMany(wines);
  console.log("Created Some Wines!");
};
const run = async () => {
  await main();
  db.close();
};

run();
