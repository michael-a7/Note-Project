import React from "react"
import {Link} from "react-router-dom"
import ls from 'local-storage'
// I Called this file "ClassComp" because I went back and forth between trying to get the app to work through
// class components or through hooks (on another file I had called "Hooks")
class ClassComp extends React.Component{
    constructor(){
        super()
        this.state = {
            newText: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
    }

    handleChange(event) {
       this.setState({
            newText: event.target.value
        })
    }
    handleSubmit(event){
        const savedText = this.state.newText;
        localStorage.setItem('Page', savedText);

    }
    handleLoad(event) {
        const data =(localStorage.getItem('Page'))
         this.setState(
            {newText: data}
         )
    }
    render(){
        return(
            <div>
                <form>
                    <textarea
                        value={this.state.newText}
                        onChange={this.handleChange}
                        placeholder="Write some text..."
                        rows="30"
                        cols="150"
                    />
                </form>
                <button className="click1">
                    <Link to="/" className="buttonText">Go Home</Link>
                </button>
                <button className="click2" onClick={this.handleSubmit}>
                    Save Note
                </button>
                <button className="click1" onClick={this.handleLoad}>
                    Load Note
                </button>
            </div>
        )
    }
}
export default ClassComp
