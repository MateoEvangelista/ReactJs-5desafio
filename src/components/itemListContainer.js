import React, { useState, useEffect } from "react";
import ItemList from "./itemList";

const ItemListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=2")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <ItemList users={users} />;
    </div>
  );
};

export default ItemListContainer;
