import React from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import "../Sidebar.css";

const Sidebar = (props) => {
  return (
    <Menu right {...props}>
      <Link className="menu-item" to="/upcoming">
        Neuerscheinungen
      </Link>
      <Link className="menu-item" to="/popular">
        Am Beliebtesten
      </Link>
      <Link className="menu-item" to="/popularityasc">
        Beliebtheit Aufsteigend
      </Link>
      <Link className="menu-item" to="/popularitydesc">
        Beliebtheit Absteigend
      </Link>
      <Link className="menu-item" to="/releaseasc">
        Erscheinungsdatum Aufsteigend
      </Link>
      <Link className="menu-item" to="/releasedesc">
        Erscheinungsdatum Absteigend
      </Link>
      <Link className="menu-item" to="/voteaverageasc">
        ø Bewertung Aufsteigend
      </Link>
      <Link className="menu-item" to="/voteaveragedesc">
        ø Bewertung Absteigend
      </Link>
    </Menu>
  );
};

export default Sidebar;
