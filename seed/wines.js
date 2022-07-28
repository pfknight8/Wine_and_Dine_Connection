const db = require("../db")
const { Wine } = require("../models")

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const main = async () => {
  const wines = [
    {
      name: "Grigori Family Reserve",
      description: "Rich and intense. Pairs well with beef and venison.",
      varietal: "Cabernet Sauvignon",
      category: "Red",
      country: "Australia",
      region: "Coonawarra",
      sweetness: "Medium",
      price_range: "value",
      image: "https://i.imgur.com/23ONl9o.jpeg",
    },
    {
      name: "Relax",
      description: "Fruit forward with floral aromas of apples and peaches, hint of citrus.",
      varietal: "Riesling",
      category: "White",
      country: "Germany",
      region: "Mosel",
      sweetness: "Off-Dry",
      price_range: "value",
      image: "",
    },
    {
      name: "Domdechant Werner Kirchenstuck",
      description: "Delicate peach and floral aromas are juxtaposed by whiffs of smoke and struck flint. Luscious, creamy palate balanced by hint of acidity.",
      varietal: "Riesling",
      category: "White",
      country: "Germany",
      region: "Baden",
      sweetness: "Dry",
      price_range: "premium",
      image: "",
    },
    {
      name: "Schloss Eberstein",
      description: "Medium bodied, crisp riesling with nose of apricots, hints of citrus and honeysuckle",
      varietal: "Riesling",
      category: "White",
      country: "Germany",
      region: "Rheingau",
      sweetness: "Off-Dry",
      price_range: "premium",
      image: "https://i.imgur.com/JbqtbNk.jpeg",
    },
    {
      name: "Concha y Toro Don Melchor",
      description: "Smooth aromas of leather, plum, and cassis. A well structured Cab, allow to age 4 - 10 years for optimal driking experience.",
      varietal: "Cabernet Sauvignon",
      category: "Red",
      country: "Chile",
      region: "Puente Alto",
      sweetness: "Off-Dry",
      price_range: "luxury",
      image: "https://i.imgur.com/5VZZ4q4.jpeg",
    },
    {
      name: "Walla Walla Vinters",
      description: "Full-bodied merlot wine with subtle tannis and medium acidity.",
      varietal: "Merlot",
      category: "Red",
      country: "USA",
      region: "Walla Walla Washington",
      sweetness: "Off-Dry",
      price_range: "premium",
      image: "",
    },
    {
      name: "Saldo",
      description: "Dark ruby in color; full-bodied, black licorice, cherry, chocolate, and spice notes; voluptuous soft finish with velvety tannins.",
      varietal: "Zinfandel",
      category: "Red",
      country: "USA",
      region: "Napa Valley",
      sweetness: "Off-Dry",
      price_range: "premium",
      image: "",
    },
    {
      name: "Saldo",
      description: "Dark ruby in color; full-bodied, black licorice, cherry, chocolate, and spice notes; voluptuous soft finish with velvety tannins.",
      varietal: "Zinfandel",
      category: "Red",
      country: "USA",
      region: "Napa Valley",
      sweetness: "Off-Dry",
      price_range: "premium",
      image: "",
    },
    {
      name: "Barefoot",
      description: "Sweet, affordable white wine from California.",
      varietal: "Moscato",
      category: "White",
      country: "USA",
      region: "California",
      sweetness: "Sweet",
      price_range: "value",
      image: "",
    },
    {
      name: "Piper Heidsieck Brut",
      description: "Medium body with citrus, biscuit notes.",
      varietal: "Brut",
      category: "Sparkling",
      country: "France",
      region: "Champagne",
      sweetness: "Off-Dry",
      price_range: "premium",
      image: "",
    },
    {
      name: "Dow's Tawny Port 10YR",
      description: "Medium body with citrus, biscuit notes.",
      varietal: "Tawny Port",
      category: "Dessert",
      country: "Portugal",
      region: "Porto",
      sweetness: "Sweet",
      price_range: "premium",
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
