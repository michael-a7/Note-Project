//TODO: Change file name and update throughout app
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
export function NotePad(){
    const [text,setText]=useState("")
    const [fileName, myFile] = useState("")
    const [open, setWindow] = useState(false)
    const [saveArray, updateSave] = useState([])
    function handleChange(event){
        setText(event.target.value);
    }

    function handleFileChange(event){
        myFile(event.target.value);
    }
    // Changes value of text in textbox

    function handleModal(event){
        setWindow(!open);
    }
    // Opens Modal for saving and loading

    function handleSubmit(event){
        if(fileName===""){
            alert("Please enter valid file name.")
        }
        else{
        const id = new Date().valueOf()
        const name = fileName
        const data = {name, text, id}
        saveArray.push(data)
        localStorage.setItem("Save List",JSON.stringify(saveArray))
        setWindow(!open);}
    }
    // Saves objects of name, text, and id to an array in localstorage
    // Currently also saves File name/text pairs as their own object items in local storage
    // Creates an alert for empty save names

    function handleLoading(event){
        const array = JSON.parse(localStorage.getItem("Save List"));
        let file = array.find(({name})=>name == fileName)
        //TODO: create error for invalid load
        setText(file.text)
        setWindow(false);
    }
    function wipeSave(event){
        updateSave([])
    }
    return(
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
                
                <button
                    className="click1"
                    onClick={handleModal}
                >
                        Save/Load
                </button>
                {/* Opens Modal */}


                <Modal
                isOpen = {open}
                onRequestClose = {handleModal}
                className="modal">
                    <div className="modalContent">
                        <form>
                            <input type ="text" placeholder="File Name" value={fileName} onChange={handleFileChange}/>
                        </form>
                        <button className="click2" onClick={handleSubmit}>Save</button>
                        <button className="click1" onClick={handleLoading}> Load</button>
                        <button className="click2" onClick = {handleModal}>Close</button>                        
                        </div>
                </Modal>



                <button className="click2"><Link to="/" className="buttonText">Home</Link></button>
                <button className="click3" onClick = {wipeSave}>Clear</button>
        </div>
    )
}
export default NotePad;
