import React, {useState} from 'react';
import ls from 'local-storage'
import Modal from 'react-modal';
function Test(){
    const [text,newText]=useState("")
    function handleChange(event){
        newText(event.target.value);
    }
    function handleSubmit(event){
        localStorage.setItem('Page',text)
    }
    function handleLoad(event){
        //Issue
        const data = localStorage.getItem('Page')

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
                <button className="click1" onClick={handleSubmit}> Save</button>
                <button className="click2"onClick={handleLoad}> Load</button>
        </div>
    )
}
export default Test;
