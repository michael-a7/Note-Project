import React from 'react'
import {Link} from "react-router-dom";
import ls from 'local-storage'
import ClassComp from './ClassComp'
import handleLoad from './ClassComp'
function Home(){
    return(
        <div>
           <h1 id="head">Welcome to NoteHolder</h1>
           <button className="click1">
               <Link to="/classcomp" className="buttonText">
                   New Note
               </Link>
            </button>
        </div>
    )
}
export default Home