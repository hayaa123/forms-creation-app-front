import React from 'react';

export default function DropDownList(props) {
  return (
  <>
        <label for={props.item}>
        {props.item.item}
    </label>
    {/* {props.item.options.split(",").map(op=>{return(`${op}>>>`)})} */}
    <select name={props.item} >
     {props.item.options.split(",").map(op=>{
        return(<option>{op}</option>)
     })}   
    </select>
    <button onClick={()=>props.deleteElement(props.item.id)}>Delete</button>

  </>
   )
}
