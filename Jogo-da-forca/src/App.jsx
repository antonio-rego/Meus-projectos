import { ChallengePage } from './ChallengePage';
import { HomePage } from './HomePage';
import { Routes, Route } from 'react-router';

function App() {
  

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/challenge" element={<ChallengePage />} />
    </Routes>
  )
}

export default App
