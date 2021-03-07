import React from "react"
import { useParams } from "react-router-dom"

function Parameter(){
    const {name} = useParams()
    return(<div>This is {name} </div>)
}

export default Parameter