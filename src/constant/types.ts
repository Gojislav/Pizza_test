export interface FormValue {
  name: string;
  phone: string;
  street: string;
  house: string;
  postal: string;
  city: string;
  size: PizzaSize;
  combination: string[];
  creditCard: string;
  expiration: string;
  security: string;
}

export interface FormError {
  name: string;
  phone: string;
  street: string;
  house: string;
  postal: string;
  city: string;
  creditCard: string;
  expiration: string;
  security: string;
}

export enum PizzaSize {
  Small= "s",
  Medium = "m",
  Large = "l"
}

export interface PizzaSizeType {
  label: string;
  size: PizzaSize;
  price: number;
}

export enum Combination {
  Olives = "olives",
  Pepperoni = "pepperoni",
  Mushrooms = "mushroom",
  Pepper = "pepper",
}

export interface CombinationType {
  label: string;
  type: Combination;
  price: number;
}
