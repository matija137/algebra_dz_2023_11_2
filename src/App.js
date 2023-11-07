import "./App.css";

import React, { Component } from "react";
import Komponenta1 from "./Components/Komponenta1";
import Komponenta2 from "./Components/Komponenta2";
import Komponenta3 from "./Components/Komponenta3";

class App extends Component {
  render() {
    const korisnici = [
      { ime: "Mirko", prezime: "Mirkić", godine: 23 },
      { ime: "Marko", prezime: "Markić", godine: 32 },
      { ime: "Joža", prezime: "Manolić", godine: 123 },
    ];

    return (
      <div>
        <Komponenta1 korisnici={korisnici} />
        <Komponenta2 korisnici={korisnici} />
        <Komponenta3>
          <p>Ovo je neki childeren props?</p>
          <ul>
            {" "}
            {korisnici.map((korisnik, index) => (
              <li key={index}>
                {korisnik.ime +
                  " " +
                  korisnik.prezime +
                  " (" +
                  korisnik.godine +
                  ")"}
              </li>
            ))}
          </ul>
        </Komponenta3>
      </div>
    );
  }
}

export default App;
