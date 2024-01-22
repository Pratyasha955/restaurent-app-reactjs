import React, {useState} from 'react';
import "./MealForm.css"

const MealForm = (props) => {
    const [amount, setAmount] = useState(1);
    const submitHandler = (event) => {
      event.preventDefault();
      props.onAddToCart(amount); // Invoke onAddToCart with the selected amount
    };
  
    const amountChangeHandler = (event) => {
      setAmount(+event.target.value);
    };
  
    return (
      <form className="form" onSubmit={submitHandler}>
        <div className='form-group'>
          <label>Amount</label>
          <input
            type="number"
            min="1"
            max="10"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='form-button'>
          <button type="submit">+ Add</button>
        </div>
      </form>
    );
  };

export default MealForm;
