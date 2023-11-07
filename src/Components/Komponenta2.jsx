import React from "react";

const Komponenta2 = ({ korisnici }) => {
  return (
    <div>
      <h1>Druga komponenta (definirana funkcijom)</h1>
      <ul>
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
    </div>
  );
};

export default Komponenta2;
