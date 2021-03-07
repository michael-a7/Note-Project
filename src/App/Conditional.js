import {React,useState} from 'react';
import {Route, useParams, Link} from 'react-router-dom';

function Conditional(){
        
        const saveData = JSON.parse(localStorage.getItem("Save List"))
        const {id} = useParams()
        function Search(a){
            let file = saveData.find(({id})=>id === a)
            const identity = file.id
            console.log(identity)
        }
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
            {/*use the onclick function to call the unique ID*/}
            {/* Issue where arrow function won't respond*/}
            <button className="divButton" onClick = {Search(note.id)}></button>
            </div>
        </Link>
        )))}}
export default Conditional