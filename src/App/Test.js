//TODO: Change file name and update throughout app
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
export function Test(){
    //Set
    const [text,newText]=useState("")
    const [fileName, myFile] = useState("")
    const [Open, setWindow] = useState(false)
    const [saveArray, updateSave] = useState([])
    function handleChange(event){
        newText(event.target.value);
    }
    function handleFileChange(event){
        myFile(event.target.value);
    }
    function handleModal(event){
        setWindow(!Open);
    }
    function handleSubmit(event){
        const id = new Date().valueOf()
        const data = {fileName, text, id}
        saveArray.push(data)
        localStorage.setItem("Save List",JSON.stringify(saveArray))
        localStorage.setItem(fileName,JSON.stringify(data))
        setWindow(!Open);
    }
    function handleLoading(event){
        const item = JSON.parse(localStorage.getItem(fileName));
        newText(item.text)
        setWindow(!Open);
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
                <button
                    className="click1"
                    onClick={handleModal}
                >
                        Save/Load
                </button>
                <Modal
                isOpen = {Open}
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
                <div className="displayNotes">
                    {saveArray.map(note=>(
                        <div className="savedNote">
                            <h3 className="noteHeader">{note.fileName}</h3>
                            <p>{note.text}</p>
                        </div>
                    ))}
                </div>
        </div>
    )
}
export default Test;
