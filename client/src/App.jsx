import Home from "./pages/Home";
import { Cart } from "./Components/ShoppingCart/Cart";
import { Header } from "./Components/Header/Header";
import { DataProvider } from "./Contexto/DataContext";
import "./App.css";
function App() {
  return (
    <DataProvider>
      <div className="app">
        <Header />
        <Cart />
        <Home />
      </div>
    </DataProvider>
  );
}

export default App;
