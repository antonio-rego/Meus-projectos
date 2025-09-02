import { useLocation, useNavigate } from "react-router";
import './ChallengePage.css';

export function ChallengePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const themes = ["Animals", "Jobs", "Countries", "Foods"];
  const attempts = location.state?.attempts || 7

  function handleTheme(theme) {
    navigate("/challenge/game", {
      state: {
        attempts, theme
      }
    });
  }

  return (
    <>
      <title>Jogo da Forca</title>
      <link rel="icon" href="/imagem-de-forca-favicon.jpg" />
      <div className="challenge-container">
        <h1 className="choose-title">Choose a theme:</h1>
        <div className="themes">
          <ul>
            {themes.map(theme => (
              <li
                key={theme}
                onClick={() => handleTheme(theme)}
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
