import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />

      <main>
        <Menu />
      </main>
    </div>
  );
}

export default App;
