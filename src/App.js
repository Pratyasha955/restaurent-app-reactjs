import React, { Fragment, useState } from 'react';
import Header from "./component/Layout/Header";
import Summary from "./component/Layout/Summary";
import Meallist from './component/Meal/MealList';
import Cart from './component/Cart/Cart';
import CartContextProvider from './component/Store/CartContextProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContextProvider> 
      <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler} />} 
        <Header onShowCart={showCartHandler}/>
        <Summary />
        <Meallist />
      </Fragment>
    </CartContextProvider>
  );
}

export default App;
