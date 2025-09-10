import { Header } from "./Header";

export function HomePage() {
  return (
    <>
      <Header />

      <div className="options-container">
        <div className="seafood">Seafood</div>
        <div className="portuguese-dishes">Portuguese dishes</div>
        <div className="desserts">Desserts</div>
        <div className="breakfast">Breakfast</div>
        <div className="random">Random Meal</div>
      </div>
    </>
  )

}