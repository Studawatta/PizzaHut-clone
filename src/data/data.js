import {
  pizza01,
  pizza02,
  pizza03,
  pizza04,
  pizza05,
  promotion01,
  promotion02,
  promotion03,
  promotion04,
} from './images';

const pizzas = [
  {
    id: 1,
    name: 'Seeni Sambol & Cheese',
    desc: 'A delightful combination of cream cheese & Seeni Sambol topped with Mozzarella & baked to perfection',
    price: 770,
    pic: pizza01,
  },
  {
    id: 2,
    name: 'Cheese Lovers',
    desc: 'Rich tomato sauce with a triple layer of mozzarella cheese.',
    price: 930,
    pic: pizza02,
  },
  {
    id: 3,
    name: 'Sausage Delight',
    desc: 'Chicken sausages & onions with a double layer of cheese.',
    price: 1400,
    pic: pizza03,
  },
  {
    id: 4,
    name: 'Tandoori Chicken',
    desc: 'Tandoori chicken & onions with a double layer of cheese.',
    price: 850,
    pic: pizza04,
  },
  {
    id: 5,
    name: 'Black Chicken',
    desc: 'Flavoursome pieces of black chicken and crunchy onion with a double layer of cheese.',
    price: 770,
    pic: pizza05,
  },
];

const promos = [
  {
    id: 1,
    name: 'Exclusive online offer 01',
    price: 4500,
    pic: promotion01,
  },
  {
    id: 2,
    name: 'Exclusive online offer 02',
    price: 2400,
    pic: promotion02,
  },
  {
    id: 3,
    name: 'MY BOX PRO',
    price: 1960,
    pic: promotion03,
  },
  {
    id: 4,
    name: 'MY BOX LITE',
    price: 1500,
    pic: promotion04,
  },
];
export { pizzas, promos };
