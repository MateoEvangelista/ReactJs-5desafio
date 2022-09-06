import "./styles.css";

//NavBar
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";
import ItemCount from "./components/itemCount";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}
