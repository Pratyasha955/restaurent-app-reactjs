import React from 'react';
import { useCart } from '../store/CartContextProvider';
import MealForm from './MealForm';
import './MealItem.css';

const MealItem = (props) => {
  const { name, description, price, id } = props;
  const cartCtx = useCart(); 

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      description: description,
      price: price,
      amount: amount,
    });
  };

  return (
    <li className="meal-item">
      <div className="meal-details">
        <div>
          <h3>{name}</h3>
          <div className="description">{description}</div>
          <div className="price">${price}</div>
        </div>
        <div className="form-container">
          <MealForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;