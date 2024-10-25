import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/CartPage";
import SpecialOfferPage from "./Pages/SpecialPage/SpecialOfferPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/special" element={<SpecialOfferPage />} />
      </Routes>
    </div>
  );
}

export default App;
