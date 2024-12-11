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
const fruitTextInput = document.querySelector(
  "#fruit-input"
) as HTMLInputElement;
const handleFruitSearchClick = (): void => {
  const fruit = getFruit(fruitTextInput.value.trimEnd());
  if (fruit) {
    console.log(fruit);
  } else {
    console.log(`No fruit found with the name "${fruitTextInput.value}"`);
  }
};
const searchButton = document.querySelector(
  "#fruit-search-button"
) as HTMLButtonElement;
searchButton.addEventListener("click", handleFruitSearchClick);

const fruitIconTextInput = document.querySelector(
  "#fruit-icon"
) as HTMLInputElement;
const handleFruitIconSearchClick = (): void => {
  const inputText = fruitIconTextInput.value.trimEnd();
  const icon = getIcon(inputText);
  if (icon) {
    console.log(`${inputText} icon: ${icon}`);
  } else {
    console.log(`No icon found with the name "${inputText}"`);
  }
};
const iconSearchButton = document.querySelector(
  "#fruit-icon-search-button"
) as HTMLButtonElement;
iconSearchButton.addEventListener("click", handleFruitIconSearchClick);

const fruitColorTextInput = document.querySelector(
  "#fruit-color"
) as HTMLInputElement;
const handleFruitColorSearchClick = (): void => {
  const inputText = fruitColorTextInput.value.trimEnd();
  const color = getColor(inputText);
  if (color) {
    console.log(`${inputText} color: ${color}`);
  } else {
    console.log(`No color found with the name "${inputText}"`);
  }
};
const colorSearchButton = document.querySelector(
  "#fruit-color-search-button"
) as HTMLButtonElement;
colorSearchButton.addEventListener("click", handleFruitColorSearchClick);
// console.log(`The category for "melon" is ${getCategory("melon")}`);

// console.log(
//   `There are ${numberOfColoredFruits("Purple")} fruits with the color Purple`
// );
// console.log(
//   `There are ${numberOfCategoryFruits("Berry")} fruits in the category Berry`
// );
// console.log(getFruitsByCategory("Berry"));
// console.log(getFruitsByColor("Green"));
// console.log(getIconsByCategory("Drupe"));
// console.log(getIconsByColor("Red"));

// console.log(getCategories());
// console.log(getColors());
