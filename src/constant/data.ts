import { PizzaSize, PizzaSizeType, CombinationType, Combination } from "./types";

export const PizzaSizeData: PizzaSizeType[] = [
  {
    label: "Small($15)",
    size: PizzaSize.Small,
    price: 15,
  },
  {
    label: "Medium($20)",
    size: PizzaSize.Medium,
    price: 20,
  },
  {
    label: "Large($25)",
    size: PizzaSize.Large,
    price: 25,
  }
];

export const PizzaCombinationData: CombinationType[] = [
  {
    label: "Olives($3)",
    type: Combination.Olives,
    price: 3,
  },
  {
    label: "Pepperoni($4)",
    type: Combination.Pepperoni,
    price: 4,
  },
  {
    label: "Mushrooms($2)",
    type: Combination.Mushrooms,
    price: 2,
  },
  {
    label: "Pepper($2)",
    type: Combination.Pepper,
    price: 2,
  },
];
