import React from 'react'

export default function TextField(props) {
    return (
        <div>
            <label>{props.item.item}</label>    
            <input type="text"/>
        </div>
    )
}
