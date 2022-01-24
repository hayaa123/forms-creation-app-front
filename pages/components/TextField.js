import React from 'react'

export default function TextField(props) {
    return (
        <div>
            <label>{props.item.item}</label>    
            <input type="text"/>
            <button onClick={()=>props.deleteElement(props.item.id)}>Delete</button>
        </div>
    )
}
