import { React, useState } from "react";
import { Link } from "react-router-dom";
import ls from "local-storage";
import ClassComp from "../ClassComp";
import Modal from "react-modal";
import Boxes from "./Boxes";
export default function Home() {
  return (
    <div>
      <h1 id="head">Welcome to NoteHolder</h1>
      <Boxes />
    </div>
  );
}
