import expensive from "./assets/expensive.jpg";
import margherita from "./assets/margherita.jpg";
import pepperoni from "./assets/pepperoni.jpg";
import vegan from "./assets/vegan.jpg";
import pineapple from "./assets/pineapple.jpg";

export const MenuPizza = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic pizza topped with fresh basil and mozzarella cheese.",
    url: expensive,
    price: "10.99",
  },
  {
    id: 2,
    name: "Pepperoni",
    description:
      "Delicious pizza loaded with pepperoni slices and melted cheese.",
    url: margherita,
    price: "14.99",
  },
  {
    id: 3,
    name: "Vegetarian",
    description:
      "A flavorful combination of fresh vegetables and cheese on a crispy crust.",
    url: pepperoni,
    price: "12.99",
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "A tropical twist with ham, pineapple, and melted cheese.",
    url: vegan,
    price: "16.50",
  },
  {
    id: 5,
    name: "BBQ Chicken",
    description:
      "Savory barbecue sauce, grilled chicken, and red onions on a tangy pizza.",
    url: pineapple,
    price: "8.99",
  },
];
