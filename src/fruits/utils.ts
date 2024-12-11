import Fruit from "../fruit";
import Category from "../props/category";
import Color from "../props/color";
import Icon from "../props/icon";
import { fruits } from "./fruits";

export const getFruit = (name: string): Fruit | undefined => {
  // använd fruits-arrayen och returnera det fruit-objekt som matchar name
  // finns det ingen sådan fruit så returnera undefined
  return fruits.find((fruit) => fruit.name === name.toLowerCase());
};

export const getIcon = (name: string): Icon | undefined => {
  // använd fruits-arrayen och returnera ikonen som matchar frukten name
  // finns det ingen sådan frukt så returnera undefined
  return getFruit(name)?.icon;
};

export const getColor = (name: string): Color | undefined => {
  // använd fruits-arrayen och returnera färgen som matchar frukten name
  // finns det ingen sådan frukt så returnera undefined
  return getFruit(name)?.color;
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
export const getCategory = (name: string): Category | undefined => {
  return getFruit(name)?.category;
};

export const numberOfColoredFruits = (color: Color): number => {
  // använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
  // finns det inga frukter av den färgen så svara 0
  return fruits.filter((fruit) => fruit.color === color).length;
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori
export const numberOfCategoryFruits = (category: Category): number => {
  return fruits.filter((fruit) => fruit.category === category).length;
};

export const getFruitsByCategory = (category: Category): Fruit[] => {
  // använd fruits-arrayen
  // ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
  return fruits.filter((fruit) => fruit.category === category);
};

// gör en getFruitsByColor också
export const getFruitsByColor = (color: Color): Fruit[] => {
  return fruits.filter((fruit) => fruit.color === color);
};

export const getIconsByCategory = (category: Category): Icon[] => {
  // använd fruits-arrayen
  // ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
  const icons: Icon[] = [];
  getFruitsByCategory(category).forEach((fruit) => {
    icons.push(fruit.icon);
  });
  return icons;
};

// gör en getIconsByColor också
export const getIconsByColor = (color: Color): Icon[] => {
  const icons: Icon[] = [];
  getFruitsByColor(color).forEach((fruit) => {
    icons.push(fruit.icon);
  });
  return icons;
};

// gör en getCategories som returnerar en array av alla kategorier
export const getCategories = (): Category[] => {
  const categories: Category[] = [];
  fruits.forEach((fruit) => {
    if (!categories.find((category) => category === fruit.category)) {
      categories.push(fruit.category);
    }
  });
  return categories;
};

// gör en getColors som returnerar en array av alla färger
export const getColors = (): Color[] => {
  const colors: Color[] = [];
  fruits.forEach((fruit) => {
    if (!colors.find((color) => color === fruit.color)) {
      colors.push(fruit.color);
    }
  });
  return colors;
};
