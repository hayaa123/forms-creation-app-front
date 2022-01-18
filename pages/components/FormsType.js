import React from 'react'
import { useState } from 'react'
export default function FormsType() {
    let optionArray = [""]
    let [fieldtype,SetFieldType]=useState("text")
    let handleChange = (e)=>{
        SetFieldType(e.target.value)
    }
    return (
        <>
           <div>
            <p>type of field</p>
            <select onChange={handleChange}>
            <option value="text">text field</option>
            <option value="multiple">multiple choice</option>
            <option value="drop">drop down list</option>
            </select>
            {fieldtype =="text" && (
                    <>
                    <form>
                        <input type="text" placeholder='place the field label here'/>
                        <input type="text" value=""/>
                        <button type='submit'>Save</button>
                    </form>
                    </>
            )}

            {fieldtype =="multiple" && (
                    <>
                    <form>
                        <input type="text" placeholder='place the field label here'/>
                        {optionArray.map((item,index)=>{
                            return(
                                <input type="text" placeholder={"option "+ (index+1)}/>
                            )
})}
                        <button>add option</button>
                        <button type='submit'>Save</button>
                    </form>
                    </>
            )}



            
            </div> 
        </>
    )
}
