import React, { useState, useEffect } from "react";
import ItemList from "./itemList";

const ItemDetailContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=1")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <ItemList users={users} />;
    </div>
  );
};

export default ItemDetailContainer;
