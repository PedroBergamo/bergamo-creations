import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Music from "./pages/Music.js";
import NotFound from "./pages/NotFound.js"
import MusicPage from "./pages/MusicPage.js";
import Portfolio from "./pages/Portfolio.js";
import {
      HashRouter, Switch, Route, Redirect
  } from 'react-router-dom';

import "./index.css"

function App() {
return (
    <HashRouter>
      <Header />
      <Switch>
      <Route exact path="/">
        <Redirect to="/design" />
      </Route>
      <Route path="/404" component={NotFound} />
      <Route path="/music/:id" render={props => <MusicPage {...props}/>} />
        <Route path="/design" component={Portfolio} />
      <Route path="/music" exact>
        <Music />
      </Route>
    </Switch>
      <Footer a id="f"/>
    </HashRouter>
  );
}

export default App;
