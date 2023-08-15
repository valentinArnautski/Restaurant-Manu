import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import CartProvider from "./store/CartProvider";
import Login from "./components/Account/Login";
import Comment from "./components/Comments/Comment";
import FoldMenu from "./components/Fold Menu/FoldMenu";
import Restaurant from "./components/Fold Menu/Pages/Restaurant/Restaurant";
import Review from "./components/Fold Menu/Pages/Review/Review";
import SearchBar from "./components/Fold Menu/Pages/Search/SearchBar";
import Register from "./components/Account/Register";
import ForgotPassword from "./components/Account/ForgotPassword";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginPageShown, setLoginPageShown] = useState(false);
  const [commentsIsShown, setCommentsIsShown] = useState(false);
  const [foldMenuIsShown, setFoldMenuIsShown] = useState(false);
  const [showRestaurant, setShowRestaurant] = useState(false);
  const [reviewIsShown, setReviewIsShown] = useState(false);
  const [searchBarIsShown, setSearchBarIsShown] = useState(false);
  const [registerIsShown, setRegisterIsShown] = useState(false);
  const [forgotPasswordIsShown, setForgotPasswordIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showLoginPageHandler = () => {
    setLoginPageShown(true);
    setRegisterIsShown(false);
  };

  const closeLoginPageHandler = () => {
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

  const showRestaurantHandler = () => {
    setShowRestaurant(true);
    setReviewIsShown(false);
    setFoldMenuIsShown(false);
    setSearchBarIsShown(false);
  };

  const showReviewHandler = () => {
    setReviewIsShown(true);
    setShowRestaurant(false);
    setFoldMenuIsShown(false);
    setSearchBarIsShown(false);
  };

  const showSearchBarHandler = () => {
    setFoldMenuIsShown(false);
    setSearchBarIsShown(true);
  };

  const closeSearchBarHandler = () => {
    setSearchBarIsShown(false);
  };

  const showMenuHandler = () => {
    setReviewIsShown(false);
    setShowRestaurant(false);
    setFoldMenuIsShown(false);
    setSearchBarIsShown(false);
  };

  const showRegisterHanlder = () => {
    setRegisterIsShown(true);
    setLoginPageShown(false);
    setForgotPasswordIsShown(false);
  };

  const hideRegisterHanlder = () => {
    setRegisterIsShown(false);
  };

  const showForgotPasswordHandler = () => {
    setForgotPasswordIsShown(true);
    setLoginPageShown(false);
  };

  const hideForgotPasswordHandler = () => {
    setForgotPasswordIsShown(false);
  };

  return (
    <CartProvider>
      <div className="App">
        {cartIsShown && <Cart onClose={hideCartHandler} />}

        {loginPageShown && (
          <Login
            onClose={closeLoginPageHandler}
            onRegister={showRegisterHanlder}
            onForgot={showForgotPasswordHandler}
          />
        )}

        {registerIsShown && (
          <Register
            onClose={hideRegisterHanlder}
            onLogin={showLoginPageHandler}
          />
        )}

        {forgotPasswordIsShown && (
          <ForgotPassword
            onClose={hideForgotPasswordHandler}
            onRegister={showRegisterHanlder}
          />
        )}

        {commentsIsShown && <Comment onClose={closeCommentHandler} />}

        {searchBarIsShown ? (
          <SearchBar onCloseSearchBar={closeSearchBarHandler} />
        ) : (
          <Header
            onShowCart={showCartHandler}
            onLogin={showLoginPageHandler}
            onShowFoldMenu={showFoldMenuHandler}
            onReturnToMenu={showMenuHandler}
          />
        )}

        <main>
          {foldMenuIsShown && (
            <FoldMenu
              onShowRestaurant={showRestaurantHandler}
              onShowReviews={showReviewHandler}
              onShowSearchBar={showSearchBarHandler}
              onReturnToMenu={showMenuHandler}
              onClose={hideFoldMenuHandler}
            />
          )}

          {reviewIsShown && <Review />}
          {showRestaurant && <Restaurant />}
          {!reviewIsShown && !showRestaurant && (
            <Menu onShowComment={showCommentHandler} />
          )}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
