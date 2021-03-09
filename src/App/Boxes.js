import { React, useState } from "react";
import { Link } from "react-router-dom";
import Conditional from "./Conditional";
import Modal from "react-modal";
function Boxes() {
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  function handleFileChange(event) {
    setFileName(event.target.value);
  }
  function handleModal() {
    setOpen(!open);
  }
  function deleteFile() {
    const array = JSON.parse(localStorage.getItem("Save List"));
    if (array === null) {
      alert("File name does not exist!");
    } else {
      const file = array.find(({ name }) => name == fileName);
      if (file) {
        array.splice(file);
        console.log(array);
      } else {
        alert("File name does not exist!");
      }
    }
  }
  function Test() {
    alert("Testing");
  }
  return (
    <div>
      <div className="displayNotes">
        <Link to="/notes" className="buttonText">
          <button className="newNote">
            <h3 style={{ color: "black" }}>New Note</h3>
          </button>
        </Link>
        <Conditional />
        <button className="delete" onClick={handleModal}>
          <h3 style={{ color: "black" }}>Delete Note</h3>
        </button>
        <Modal isOpen={open} onRequestClose={handleModal} className="modal">
          <form>
            <input
              type="text"
              placeholder="File Name"
              value={fileName}
              onChange={handleFileChange}
            />
          </form>
          <button className="click3" onClick={deleteFile}>
            Delete
          </button>
          <button className="click2" onClick={handleModal}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}
export default Boxes;
