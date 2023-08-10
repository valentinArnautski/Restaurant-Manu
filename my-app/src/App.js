import "./App.css";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
      </main>
    </div>
  );
}

export default App;
