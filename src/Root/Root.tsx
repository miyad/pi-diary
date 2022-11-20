import React from "react";
import './Root.css';
import { Home } from "./Home/Home";
import { Navbar } from "./Navbar/Navbar";

export const Root = () => {
  return (
    <React.Fragment>
      <div className="rootContainer">
        <Navbar />
      </div>
    </React.Fragment>
  );
};
