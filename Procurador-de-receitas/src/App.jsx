import { HomePage } from "./HomePage"
import { Routes } from "react-router";
import { Route } from "react-router";
import { SearchResultsPage } from "./SearchResultsPage";


function App() {

  return (
    <Routes>
    <Route index element={<HomePage />}/>
    <Route path="/recipes/search" element={<SearchResultsPage/>}/>
    </Routes>
  )
}

export default App
