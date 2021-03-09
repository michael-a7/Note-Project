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
  function deleteNote(event) {
    if (fileName === "") {
      alert("Please enter valid file name!");
    } else {
      const array = JSON.parse(localStorage.getItem("Save List"));
      if (array) {
        const newArray = array.filter(({ name }) => name !== fileName);
        if (newArray) {
          console.log(newArray);
          setSaveArray(newArray);
        }
      } else {
        alert("Please enter valid file name!");
      }
    }
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
    setText("");
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
          <div className="Saves">Hi</div>
          <form>
            <input
              type="text"
              placeholder="File Name"
              value={fileName}
              onChange={handleFileChange}
              className="text"
            />
          </form>
          <button className="click2" onClick={handleSubmit}>
            Save
          </button>
          <button className="click1" onClick={handleLoading}>
            Load
          </button>
          <button className="click2" onClick={handleModal}>
            Close
          </button>
          <button className="click3" onClick={deleteNote}>
            Delete
          </button>
        </div>
      </Modal>
      <button className="click2">
        <Link to="/" className="buttonText">
          Home
        </Link>
      </button>
      <div>
        <button className="click3" onClick={wipeSave}>
          Clear Text
        </button>
      </div>
    </div>
  );
}
export default NotePad;
