import "./App.css";
import NavBar from "./NavBar";
import Recipe from "./Recipe";

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-page">
        <Recipe meal="Pasta" />
        <Recipe meal="Noodles" />
        <Recipe meal="Biryani" />
        <Recipe meal="Pizza" />
        <Recipe meal="Sandwich" />
        <Recipe meal="Shawarma" />
        <Recipe meal="Croissant" />
        <Recipe meal="Pancakes" />
      </div>
    </div>
  );
}

export default App;
