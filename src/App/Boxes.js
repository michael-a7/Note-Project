import {React,useState} from 'react';
import {Link} from 'react-router-dom';
function Boxes(){
    const saveData = JSON.parse(localStorage.getItem("Save List"))
    function LoadPrep(){
        console.log("Hi")
    }
    function Conditional(){
        if(saveData===null){
            return(
                <div className = "initialNote">
                    <h3>Saved notes are displayed here</h3>
                </div>
            )
        } else{
        return(saveData.map(note=>(
        
        <Link to="/notes"
        className="cardText">
        <button onClick={LoadPrep} className="divButton">
        <div className="savedNote">
            <h3>{note.name}</h3>
            <p>{note.text}</p>
            </div>
        </button>
        </Link>
        )))}}
    return(
        <div>
            <div className="displayNotes">
                <Link to="/notes"
                className = "buttonText"
                >
                    <div className = "newNote">
                        <h3 style={{color:"black"}}>New Note</h3>
                    </div>
                </Link>
                <Conditional />
            </div>
        </div>
    )
}
export default Boxes