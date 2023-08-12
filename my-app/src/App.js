import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import CartProvider from "./store/CartProvider";
import Login from "./components/Account/Login";
import Comment from "./components/Comments/Comment";
import FoldMenu from "./components/Fold Menu/FoldMenu";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginPageShown, setLoginPageShown] = useState(false);
  const [commentsIsShown, setCommentsIsShown] = useState(false);
  const [foldMenuIsShown, setFoldMenuIsShown] = useState(false);

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

  const showFoldMenuHandler = () => {
    setFoldMenuIsShown(true);
  };

  const hideFoldMenuHandler = () => {
    setFoldMenuIsShown(false);
  };

  return (
    <CartProvider>
      <div className="App">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        {loginPageShown && <Login onClose={closeLoginPage} />}
        {commentsIsShown && <Comment onClose={closeCommentHandler} />}
        <Header
          onShowCart={showCartHandler}
          onLogin={showLoginPage}
          onShowFoldMenu={showFoldMenuHandler}
        />
        <main>
          {foldMenuIsShown && <FoldMenu onClose={hideFoldMenuHandler} />}

          <Menu onShowComment={showCommentHandler} />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
