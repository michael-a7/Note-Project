import {React,useState} from 'react';
import {Link} from 'react-router-dom';
function Boxes(){
    const saveData = JSON.parse(localStorage.getItem("Save List"))
    return(
        <div>
            <div className="displayNotes">
                <Link to="/notes" className = "buttonText">
                    <div className = "newNote">
                        <h3 style={{color:"black"}}>New Note</h3>
                    </div>
                </Link>
                {saveData.map(note=>(
                    <div className="savedNote">
                        <h3 className="noteHeader">{note.name}</h3>
                        <p>{note.text}</p>
                    </div>
                    ))}
            </div>
        </div>
    )
}
export default Boxes