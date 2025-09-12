import { Header } from "../components/Header";
import { useNavigate } from "react-router";
import './HomePage.css'

export function HomePage() {

  const navigate = useNavigate();

  function handlePage(path) {
    navigate(path);
  }



  return (
    <div className="background-image-container">
      <Header />

      <div className="options-container">
        <div className="seafood" onClick={() => handlePage("seafoods")}>
          Seafood 🐟
        </div>
        <div className="portuguese-dishes" onClick={() => handlePage("portuguese")}>
          Portuguese dishes 🇵🇹
        </div>
        <div className="desserts" onClick={() => handlePage("desserts")}>
          Desserts 🍰
        </div>
        <div className="breakfasts" onClick={() => handlePage("breakfasts")}>
          Breakfast 🥐
        </div>
        <div className="random" onClick={() => handlePage("random")}>
          Random Meal 🔀
        </div>
      </div>
    </div>
  )

}