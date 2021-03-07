import {React,useState} from 'react';
import {Link} from 'react-router-dom';
function Conditional(){
        const saveData = JSON.parse(localStorage.getItem("Save List"))
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
        
        <div className="savedNote">
            <h3>{note.name}</h3>
            <p>{note.text}</p>
            {/*Make onClick a function, use arrow function*/}
            <button onClick={localStorage.setItem("Text To Load", note.text)} className="divButton"></button>
            </div>
        </Link>
        )))}}
export default Conditional