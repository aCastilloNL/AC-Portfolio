import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AboutPg, ProjectsPg, ContactPg, HomePg } from "./pg";
import { Switch, Route, useLocation } from "react-router-dom";
import { Header, MenuButton } from "./components";
import { MenuProvider } from "./context/MenuContext";
import ParticlesBG from "./utils/particles";
import "./styles/App.scss";

const App = () => {
  let location = useLocation();

  return (
    <div className="App" style={{ position: "relative" }}>
      <ParticlesBG />
      <MenuProvider>
        <Header />
        <MenuButton />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={450}>
              <Switch location={location}>
                <Route exact path="/">
                  <HomePg />
                </Route>
                <Route path="/about">
                  <AboutPg />
                </Route>
                <Route path="/projects">
                  <ProjectsPg />
                </Route>
                <Route path="/contact">
                  <ContactPg />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
      </MenuProvider>
    </div>
  );
};

export default App;
