import React from 'react';
import { useCart } from '../Store/CartContextProvider';
import MealItem from './MealItem';
import "./MealList.css";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with chicken and aromatic spices',
    price: 24.99,
  },
  {
    id: 'm2',
    name: 'Paneer Tikka Masala',
    description: 'Cottage cheese cubes in a rich and spicy tomato-based curry',
    price: 18.5,
  },
  {
    id: 'm3',
    name: 'Vegetable Biryani',
    description: 'Mixed vegetables cooked with basmati rice and Indian spices',
    price: 14.99,
  },
  {
    id: 'm4',
    name: 'Butter Chicken',
    description: 'Tender chicken pieces in a creamy and flavorful tomato-based sauce',
    price: 22.99,
  },
  {
    id: 'm5',
    name: 'Tandoori Lamb Kebabs',
    description: 'Succulent lamb pieces marinated and grilled to perfection',
    price: 19.99,
  },
  {
    id: 'm6',
    name: 'Chana Masala',
    description: 'Chickpeas cooked in a spiced tomato-based curry',
    price: 12.99,
  },
];


  const Meallist = () => {
    const cartCtx = useCart();
  
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        onAddToCart={cartCtx.addItem}
      />
    ));
  
    return (
      <div>
        <ul className="MealList">{mealsList}</ul>
      </div>
    );
  };
  
  export default Meallist;
