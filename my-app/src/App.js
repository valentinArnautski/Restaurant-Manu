import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import CartProvider from "./store/CartProvider";
import Login from "./components/Account/Login";
import Comment from "./components/Comments/Comment";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginPageShown, setLoginPageShown] = useState(false);
  const [commentsIsShown, setCommentsIsShown] = useState(false);

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

  const showCommentHandler = () => {
    setCommentsIsShown(true);
  };

  const closeCommentHandler = () => {
    setCommentsIsShown(false);
  };

  return (
    <CartProvider>
      <div className="App">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        {loginPageShown && <Login onClose={closeLoginPage} />}
        {commentsIsShown && <Comment onClose={closeCommentHandler} />}
        <Header onShowCart={showCartHandler} onLogin={showLoginPage} />
        <main>
          <Menu onShowComment={showCommentHandler} />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
