import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const dishes = [
  {
    title: 'Jollof Rice & Chicken',
    price: '$20',
    tags: 'salad | stew | soda | 30 ml',
  },
  {
    title: "Beef Fried Rice",
    price: '$16',
    tags: ' hot sauce | Ginger beer | Slice of lime',
  },
  {
    title: 'Aroze Con leche (Rice Pudding)',
    price: '$10',
    tags: 'strawberries | Citrus juice | Sugar',
  },
  {
    title: 'African Stir Fry',
    price: '$31',
    tags: 'brocolli | water | jingsing Bitters',
  },
  {
    title: 'Mac and cheese',
    price: '$26',
    tags: 'water | milk | parsely | Orange garnish',
  },
];
const firstCourse = [
  {
    title: 'Jollof Rice & Chicken',
    price: '$20',
    tags: 'salad | stew | soda | 30 ml',
  },
  {
    title: "Beef Fried Rice",
    price: '$16',
    tags: ' hot sauce | Ginger beer | Slice of lime',
  },
  {
    title: 'Aroze Con leche (Rice Pudding)',
    price: '$10',
    tags: 'strawberries | Citrus juice | Sugar',
  },
  {
    title: 'African Stir Fry',
    price: '$31',
    tags: 'brocolli | water | jingsing Bitters',
  },
  {
    title: 'Mac and cheese',
    price: '$26',
    tags: 'water | milk | parsely | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, dishes, firstCourse, awards };
