import React, { Component } from "react";

class Komponenta1 extends Component {
  render() {
    const { korisnici } = this.props;

    // https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx
    return (
      <div>
        <h1>Prva komponenta (definirana klasom)</h1>
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
  }
}

export default Komponenta1;
