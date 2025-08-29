
export function ChallengePage() {

  const themes = ["Animals", "Jobs", "Countries", "Foods", "Random"];

  function handleTheme() {
// Acabar para tratar do tema
  }

  return (
  <>
  <h1>Choose a theme:</h1>
  <div className="themes">
    <ul>
      {themes.map(theme => {
        return (
        <li
        key={theme}
        onClick={handleTheme}
        >
          {theme}
        </li>
        )
      })}
    </ul>
  </div>
  </>
  )
}