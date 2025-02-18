interface pizzaDataType {
  name: string;
  ingredients: string;
  region: string;
  price: number;
  src: string;
  soldOut: boolean;
}

export const pizzaData: pizzaDataType[] = [
  {
    name: "Margherita",
    ingredients:
      "Tomato sauce, Mozzarella cheese, Fresh basil, Olive oil, Salt",
    region: "Napoli",
    price: 10,
    src: "/assets/image/Margherita.jpg",
    soldOut: false,
  },
  {
    name: "Quattro Stagioni",
    ingredients:
      "Tomato sauce, Mozzarella cheese, Ham, Mushrooms, Artichokes, Olives",
    region: "Northern Italy",
    price: 15,
    src: "/assets/image/Quattro Stagioni.jpg",
    soldOut: false,
  },
  {
    name: "Capricciosa",
    ingredients:
      "Tomato sauce, Mozzarella cheese, Ham, Mushrooms, Artichokes, Olives, Egg",
    region: "Southern Italy",
    price: 12,
    src: "/assets/image/Capricciosa.jpg",
    soldOut: false,
  },
  {
    name: "Diavola",
    ingredients: "Tomato sauce, Mozzarella cheese, Spicy salami, Chili peppers",
    region: "Southern Italy",
    price: 12,
    src: "/assets/image/Diavola.jpg",
    soldOut: false,
  },
  {
    name: "Napolitana",
    ingredients: "Tomato sauce, Mozzarella cheese, Anchovies, Capers, Oregano",
    region: "Napoli",
    price: 10,
    src: "/assets/image/Napolitana.jpg",
    soldOut: false,
  },
  {
    name: "Frutti di Mare",
    ingredients: "Tomato sauce, Mozzarella cheese, seafood, garlic, parsley",
    region: "Southern Italy",
    price: 15,
    src: "/assets/image/Frutti di Mare.jpg",
    soldOut: false,
  },
  {
    name: "Romana",
    ingredients: "Tamato sauce, Mozzarella cheese, Anchovies, Capers, Oregano",
    region: "Rome",
    price: 12,
    src: "/assets/image/Romana.jpg",
    soldOut: false,
  },
  {
    name: "Siciliana",
    ingredients:
      "Tomato sauce, Mozzarella cheese, Anchovies, Capers, Olives, Oregano",
    region: "Sicily",
    price: 12,
    src: "/assets/image/Siciliana.jpg",
    soldOut: false,
  },
];
