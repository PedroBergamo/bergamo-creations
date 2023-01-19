import "../css/pages.css"
import Clients from "../components/Clients.js";

const Portifolio = () => {
  return(
    <div>
      <div className= "content">
          <h1>Symbols are powerful because they are visible signs of invisible realities</h1>
          <h1>-Saint Augustine</h1>
          <p style={{marginTop: "10%"}}>
          Bergamo Creations is a Helsinki-based branding agency focused on the
          creation and nurturing of creative brands through the creation of branding assets
          (logos, branding books) and divergent art pieces such as cover arts and fine art prints.
          </p>
      </div>
      <Clients/>
    </div>
    )
}

export default Portifolio;
