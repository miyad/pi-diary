import React, {useState} from "react";

import './Navbar.css';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';



export const Navbar = () => {


    return (
      <React.Fragment>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Toggle right offcanvas
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
      </React.Fragment>
    );
};
