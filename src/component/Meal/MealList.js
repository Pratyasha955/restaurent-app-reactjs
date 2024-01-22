import React from 'react';
import { useCart } from '../store/CartContextProvider';
import MealItem from './MealItem';
import "./MealList.css";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi Roll',
    description: 'Fresh sushi rice wrapped in seaweed with various fillings',
    price: 24.99,
  },
  {
    id: 'm2',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    price: 18.5,
  },
  {
    id: 'm3',
    name: 'Vegetable Stir-Fry',
    description: 'Assorted vegetables stir-fried in a flavorful sauce',
    price: 14.99,
  },
  {
    id: 'm4',
    name: 'Pasta Carbonara',
    description: 'Pasta with creamy sauce, bacon, and Parmesan cheese',
    price: 22.99,
  },
  {
    id: 'm5',
    name: 'Tandoori Chicken',
    description: 'Spiced and grilled chicken marinated in yogurt and spices',
    price: 19.99,
  },
  {
    id: 'm6',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing and croutons',
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
