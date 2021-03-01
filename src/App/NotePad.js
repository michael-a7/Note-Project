//Something is off about same save/load. Check tomorrow
//Consider finding a way to delete the original file with a particular name from the list of saved 
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import Boxes from './Boxes'
export function NotePad(){
    const [text,setText]=useState("")
    const [fileName, myFile] = useState("")
    const [open, setWindow] = useState(false)
    const [saveArray, updateSave] = useState([])
    useEffect(()=>{localStorage.setItem("Save List", JSON.stringify(saveArray))});
    function handleFileChange(event){
        myFile(event.target.value);
    }
    function handleChange(event){
        setText(event.target.value);
    }
    // Changes value of text in textbox

    function handleModal(event){
        setWindow(!open);
    }
   
    function handleSubmit(event){
        if(fileName===""){
            //Case 1: Empty file name
            //Works
            alert("Please enter valid file name!")
        }
        else{
            const array = JSON.parse(localStorage.getItem("Save List"));
            if(array){
                let file = array.find(({name})=>name == fileName)
                if(file){
                    //Case 2: Found saved file with same name; overwrite file
                    const name = file.name
                    saveArray.splice(file)
                    const id = new Date().valueOf()
                    const data = {name, text, id}
                    saveArray.push(data)
                    setWindow(!open);
                    }
                else{
                       //Case 3: No saved file with entered name; Create file
                       //Works
                    const id = new Date().valueOf()
                    const name = fileName
                    const data = {name, text, id}
                    saveArray.push(data)
                    setWindow(!open);
                    }
            }    
            else{
                //Case 4: Array does not exist, create first save in array
                //Works
                const id = new Date().valueOf()
                const name = fileName
                const data = {name, text, id}
                saveArray.push(data)
                setWindow(!open);
        }    
    }
    }
    // Saves objects of name, text, and id to an array in localstorage
    // Currently also saves File name/text pairs as their own object items in local storage
    // Creates an alert for empty save names

    function handleLoading(event){
        ///Load Error if there's no SaveArray
        const array = JSON.parse(localStorage.getItem("Save List"));
        if(array===null)
        {
            alert("File name does not exist!")
        }
        else{
            let file = array.find(({name})=>name == fileName)
        if(file){
            setText(file.text)
            setWindow(false);
        }
        else{
            alert("File name does not exist!")
        }
        }
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
