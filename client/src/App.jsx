import Home from "./pages/Home";
import { Cart } from "./Components/ShoppingCart/Cart";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className="app">
       <Header />
       <Cart/>
        <Home />
    
    </div>
  );
}

export default App;
