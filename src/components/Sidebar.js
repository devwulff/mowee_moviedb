import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "../Sidebar.css";

const Sidebar = (props) => {
  return (
    <Menu right {...props}>
      <a className="menu-item" href="/upcoming">
        Neuerscheinungen
      </a>
      <a className="menu-item" href="/popular">
        Am Beliebtesten
      </a>
      <a className="menu-item" href="/popularityasc">
        Beliebtheit Aufsteigend
      </a>
      <a className="menu-item" href="/popularitydesc">
        Beliebtheit Absteigend
      </a>
      <a className="menu-item" href="/releaseasc">
        Erscheinungsdatum Aufsteigend
      </a>
      <a className="menu-item" href="/releasedesc">
        Erscheinungsdatum Absteigend
      </a>
      <a className="menu-item" href="/voteaverageasc">
        ø Bewertung Aufsteigend
      </a>
      <a className="menu-item" href="/voteaveragedesc">
        ø Bewertung Aufsteigend
      </a>
    </Menu>
  );
};

export default Sidebar;
