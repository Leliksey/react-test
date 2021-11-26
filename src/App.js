import React from "react";
import "./App.css";
import Button from "./Button.js";
import Dropdown from "./Dropdown.js";
import Main from "./Main.js";
import "./script.js"

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="row">
            <div className="btn-group">
              <div className="btn-modal">
              <Button
                text="Beer for Pizza"
                className="btn btn-warning dropdown-toggle beerForPizza"
              />
              <Dropdown className="dropdown-list-hide dropdown-menu-pizza" />
              </div>
              <div className="btn-modal">
              <Button
                text="Beer for Steak"
                className="btn btn-danger dropdown-toggle beerForSteak"
              />
              <Dropdown className="dropdown-list-hide dropdown-menu-steak" />
              </div>
              <div className="btn-modal">
              <Button
                text="All available beer"
                className="btn btn-success dropdown-toggle beerAll"
              />
              <Dropdown className="dropdown-list-hide dropdown-menu-all" />
              </div>
            </div>
            <div className="btn__wrapper">
              <div className="btn__container">
                <Button text="Sort By Name" className="sortByNamePizza" />
                <Button text="Sort By Abv" className="sortByAbvPizza" />
              </div>
              <div className="btn__container">
                <Button text="Sort By Name" className="sortByNameSteak" />
                <Button text="Sort By Abv" className="sortByAbvSteak" />
              </div>
              <div className="btn__container">
                <Button text="Sort By Name" className="sortByNameAll" />
                <Button text="Sort By Abv" className="sortByAbvAll" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Main />
    </div>
  );
}

export default App;
