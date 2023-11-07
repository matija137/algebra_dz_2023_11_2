import React from "react";

const Komponenta3 = (props) => {
  return (
    <div>
      <h1>Treća komponenta (children props)</h1>
      {props.children}
    </div>
  );
};

export default Komponenta3;
