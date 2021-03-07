import {React,useState} from 'react';
import {Link} from 'react-router-dom';
import Conditional from './Conditional'
function Boxes(){
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