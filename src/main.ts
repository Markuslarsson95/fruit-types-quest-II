import {
  getCategories,
  getCategory,
  getColor,
  getColors,
  getFruit,
  getFruitsByCategory,
  getFruitsByColor,
  getIcon,
  getIconsByCategory,
  getIconsByColor,
  numberOfCategoryFruits,
  numberOfColoredFruits,
} from "./fruits/utils";
import "./styles.css";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils
console.log(getFruit("melon"));
console.log(`The icon for "melon" is ${getIcon("melon")}`);
console.log(`The color for "melon" is ${getColor("melon")}`);
console.log(`The category for "melon" is ${getCategory("melon")}`);

console.log(
  `There are ${numberOfColoredFruits("Purple")} fruits with the color Purple`
);
console.log(
  `There are ${numberOfCategoryFruits("Berry")} fruits in the category Berry`
);
console.log(getFruitsByCategory("Berry"));
console.log(getFruitsByColor("Green"));
console.log(getIconsByCategory("Drupe"));
console.log(getIconsByColor("Red"));

console.log(getCategories());
console.log(getColors());
