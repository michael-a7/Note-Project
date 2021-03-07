import {React,useState} from 'react';
import {Route, useParams, Link} from 'react-router-dom';
function Conditional(){
        const saveData = JSON.parse(localStorage.getItem("Save List"))
        const {id} = useParams()
        if(saveData===null){
            return(
                <div className = "initialNote">
                    <h3>Saved notes are displayed here</h3>
                </div>
            )
        } else{
        return(saveData.map(note=>(
        
        <Link to="/notes/:id"
        className="cardText">
        
        <div className="savedNote">
            <h3>{note.name}</h3>
            <p>{note.text}</p>
            {/*Make onClick a function, use arrow function*/}
            {/*use the onclick function to call the unique ID*/}
            <button className="divButton"></button>
            </div>
        </Link>
        )))}}
export default Conditional