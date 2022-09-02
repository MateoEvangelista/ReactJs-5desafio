import React, { useState, useEffect } from "react";
import item from "./item";

const ListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <item key={user.id} data={user} />;
      })}
    </div>
  );
};

export default ListContainer;
