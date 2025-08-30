import { useLocation, useNavigate } from "react-router";

export function ChallengePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const themes = ["Animals", "Jobs", "Countries", "Foods", "Random"];
  const attempts = location.state?.attempts || 6

  function handleTheme(theme) {
    navigate("/challenge/game", {
      state: {
        attempts, theme
      }
    });
  }

  return (
    <>
      <h1>Choose a theme:</h1>
      <div className="themes">
        <ul>
          {themes.map(theme => (
            <li
              key={theme}
              onClick={() => handleTheme(theme)}
              style={{ cursor: "pointer", margin: "5px 0" }}
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
