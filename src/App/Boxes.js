import { React, useState } from "react";
import { Link } from "react-router-dom";
import Conditional from "./Conditional";
import Modal from "react-modal";
function Boxes() {
  return (
    <div>
      <div className="displayNotes">
        <Link to="/notes" className="buttonText">
          <button className="newNote">
            <h3 style={{ color: "black" }}>New Note</h3>
          </button>
        </Link>
        <Conditional />
      </div>
    </div>
  );
}
export default Boxes;
