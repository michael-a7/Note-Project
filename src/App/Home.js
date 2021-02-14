import {React, useState} from 'react'
import {Link} from "react-router-dom";
import ls from 'local-storage'
import ClassComp from '../ClassComp'
import Modal from 'react-modal'
import Boxes from './Boxes'
export default function Home(){
    const [Open, setWindow] = useState(false)
    const [fileName, myFile] = useState("")
    function handleModal(){
        setWindow(!Open);
    }
    function handleFileChange(event){
        myFile(event.target.value);
    }
    return(
        <div>
           <h1 id="head">Welcome to NoteHolder</h1>
            <button className="click1">
            <Link to="/test" className="buttonText">
                   New Note
               </Link>
            </button>
            <Modal
                isOpen = {Open}
                onRequestClose = {handleModal}
                className="modal">
                    <file>
                    <input type ="text" placeholder="File Name" value={fileName} onChange={handleFileChange}/>
                    </file>
                    <div>
                        <button className="click1">Go</button>
                        <button className="click2" onClick = {handleModal}>Close</button>
                    </div>
                </Modal>
            <button className="click2" onClick={handleModal}>
                Load
            </button>
            <Boxes />
        </div>
    )
}