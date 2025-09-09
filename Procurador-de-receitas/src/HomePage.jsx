import { Header } from "./Header";

export function HomePage() {
  return (
    <>
      <Header />

      <div className="suggestions-container">
        <div className="popular-meals">Popular meals</div>
        <div className="healthy-suggestions">Healthy suggestions</div>
        <div className="popular-desserts">Popular desserts</div>
        <div className="random">Today's plate</div>
      </div>
    </>
  )

}