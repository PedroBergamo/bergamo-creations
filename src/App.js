import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
import Mark from "./brand/mark/mark-white.png";
import Music from "./pages/Music.js";
import Texts from "./pages/Texts.js";
import Santeros from "./pages/Santeros.js";
import NotFound from "./pages/NotFound.js"
import MusicPage from "./pages/MusicPage.js";
import Portifolio from "./pages/Portifolio.js";
import wallpapers from "./pages/wallpapers.js";
import {
      HashRouter, Switch, Route, Redirect
  } from 'react-router-dom';

import "./index.css"

function App() {
return (
    <HashRouter>
      <div className="header" id="myHeader">
      <Menu/>
      <div className="logo">
        <img src={Mark} width="20%" alt="mark"/>
      </div>
    </div>
    <Switch>
    <Route exact path="/">
      <Redirect to="/design" />
    </Route>
    <Route path="/404" component={NotFound} />
    <Route path="/music/:id" render={props => <MusicPage {...props}/>} />
    <Route path="/press" component={Santeros} />
      <Route path="/design" component={Portifolio} />
    <Route path="/music" exact>
      <Music />
    </Route>
    <Route path="/texts" exact>
      <Texts />
    </Route>
    <Route path="/wallpapers" component={wallpapers} />
    </Switch>
    <Footer a id="f"/>
    </HashRouter>
  );
}

export default App;
