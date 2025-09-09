import { HomePage } from "./HomePage"
import { Routes } from "react-router";
import { Route } from "react-router";


function App() {

  return (
    <Routes>
    <Route index element={<HomePage />}/>
    <Route path="/recipes"/>
    </Routes>
  )
}

export default App
