//Something is off about same save/load. Check tomorrow
//Consider finding a way to delete the original file with a particular name from the list of saved
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import Boxes from "./Boxes";
export function NotePad() {
  const { id } = useParams();

  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  const [saveArray, setSaveArray] = useState([]);
  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("Save List"));
    const Identify = id;
    if (array) {
      let file = array.find(({ id }) => id == Identify);
      if (file === undefined) {
        console.log("empty");
      } else {
        setText(file.text);
        setFileName(file.name);
      }
    }
  }, []);
  useEffect(() => {
    const saved = localStorage.getItem("Save List");
    if (saved) {
      setSaveArray(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("Save List", JSON.stringify(saveArray));
  });

  // While i still have "Text to Load", having a string as a second parameter allows the setText function to still work
  // if there is loaded text on the notepad. Without the string, I can't change the text.
  //So fix "Text To Load" first

  function handleFileChange(event) {
    setFileName(event.target.value);
  }

  function handleChange(event) {
    setText(event.target.value);
  }
  // Changes value of text in textbox

  function handleModal(event) {
    setOpen(!open);
  }

  function handleSubmit(event) {
    if (fileName === "") {
      //Case 1: Empty file name
      //Works
      alert("Please enter valid file name!");
    } else {
      const array = JSON.parse(localStorage.getItem("Save List"));
      if (array) {
        let file = array.find(({ name }) => name == fileName);
        if (file) {
          //Case 2: Found saved file with same name; overwrite file
          const name = file.name;
          saveArray.splice(file);
          const id = new Date().valueOf();
          const data = { name, text, id };
          saveArray.push(data);
          setOpen(!open);
        } else {
          //Case 3: No saved file with entered name; Create file
          //Works
          const id = new Date().valueOf();
          const name = fileName;
          const data = { name, text, id };
          saveArray.push(data);
          setOpen(!open);
        }
      } else {
        //Case 4: Array does not exist, create first save in array
        //Works
        const id = new Date().valueOf();
        const name = fileName;
        const data = { name, text, id };
        saveArray.push(data);
        setOpen(!open);
      }
    }
  }
  // Saves objects of name, text, and id to an array in localstorage
  // Currently also saves File name/text pairs as their own object items in local storage
  // Creates an alert for empty save names

  function handleLoading(event) {
    ///Load Error if there's no SaveArray
    const array = JSON.parse(localStorage.getItem("Save List"));
    if (array === null) {
      alert("File name does not exist!");
    } else {
      let file = array.find(({ name }) => name == fileName);
      if (file) {
        setText(file.text);
        setOpen(false);
      } else {
        alert("File name does not exist!");
      }
    }
  }

  function wipeSave(event) {
    setSaveArray([]);
  }
  return (
    <div>
      <form>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Write some text..."
          rows="30"
          cols="150"
        />
      </form>
      {/* Text Box */}

      <button className="click1" onClick={handleModal}>
        Save/Load
      </button>
      {/* Opens Modal */}
      <Modal isOpen={open} onRequestClose={handleModal} className="modal">
        <div className="modalContent">
          <form>
            <input
              type="text"
              placeholder="File Name"
              value={fileName}
              onChange={handleFileChange}
            />
          </form>
          <button className="click2" onClick={handleSubmit}>
            Save
          </button>
          <button className="click1" onClick={handleLoading}>
            {" "}
            Load
          </button>
          <button className="click2" onClick={handleModal}>
            Close
          </button>
        </div>
      </Modal>
      <button className="click2">
        <Link to="/" className="buttonText">
          Home
        </Link>
      </button>
      <button className="click3" onClick={wipeSave}>
        Clear
      </button>
    </div>
  );
}
export default NotePad;
