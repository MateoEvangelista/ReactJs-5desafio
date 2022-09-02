import "./styles.css";

//NavBar
import NavBar from "./components/NavBar";
import ListContainer from "./components/itemListContainer";
import itemCount from "./components/itemCount";
//import itemsNames from "./components/items";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer />
      <itemCount />

      <h2>Mateo Evangelista</h2>
    </div>
  );
}
