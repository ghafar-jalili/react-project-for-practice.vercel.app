import "./style.css";
import Header from "./componet/sidebar/SideBar";
import Maincontent from "./componet/main/Maincontent";
import { useState } from "react";

function App() {
  const [addtocart, setAddtocart] = useState({
    count: 0,
    total: 0,
    name: ""
  });

  // Add item to cart
  function addcard(items) {
    setAddtocart(prev => ({
      count: prev.count + 1,
      total: +(prev.total + items.price).toFixed(2),
      name: items.title
    }))
  }

  return (
    <div className="w-screen h-auto px-40 py-10 overflow-x-hidden bg-yellow-900">
      <Header cart={addtocart} />
      <Maincontent onClick={addcard} />
    </div>
  );
}

export default App;
