import React from "react"
import {Link} from "react-router-dom"
import ls from 'local-storage'
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
        const name = "name"
        const savedText = this.state.newText;
        const data = [name, savedText]
        localStorage.setItem('Page', JSON.stringify(data));

    }
    handleLoad(event) {
        const Loaded =(localStorage.getItem(JSON.parse('Page')))
         this.setState(
            {newText: Loaded[1]}
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