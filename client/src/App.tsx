import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        <ul></ul>
        <h1>ReStore</h1>

        {products.map((item: any, index) => (
          <li key={index}>{`${item.name} - ${item.price}`}</li>
        ))}
      </div>
    </>
  );
};

export default App;
