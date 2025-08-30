import { ChallengePage } from './ChallengePage';
import { GamePage } from './GamePage';
import { HomePage } from './HomePage';
import { Routes, Route } from 'react-router';

function App() {
  
  

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/challenge" element={<ChallengePage />} />
      <Route path="/challenge/game" element={<GamePage />}/>
    </Routes>
  )
}

export default App
