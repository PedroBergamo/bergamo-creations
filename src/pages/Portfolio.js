import "../css/pages.css"
import Clients from "../components/Clients.js";

const Portfolio = () => {
  return(
    <div className="container">
      <div className="splash">
          <h1>Symbols are powerful because they are visible signs of invisible realities</h1>
          <h1>-Saint Augustine</h1>
      </div>
          <p style={{marginTop: "10%"}}>
          Bergamo Creations is a Helsinki-based branding agency focused on the
          creation and nurturing of creative brands through the creation of branding assets
          (logos, branding books) and divergent art pieces such as cover arts and fine art prints.
          </p>

      <Clients/>
    </div>
    )
}

export default Portfolio;
