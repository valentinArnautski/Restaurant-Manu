import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import CartProvider from "./store/CartProvider";
import Login from "./components/Account/Login";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginPageShown, setLoginPageShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showLoginPage = () => {
    setLoginPageShown(true);
  };

  const closeLoginPage = () => {
    setLoginPageShown(false);
  };

  return (
    <CartProvider>
      <div className="App">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        {loginPageShown && <Login onClose={closeLoginPage} />}
        <Header onShowCart={showCartHandler} onLogin={showLoginPage} />
        <main>
          <Menu />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
