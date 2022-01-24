import axios from "axios";
import React from "react";
import { useState } from "react";
export default function FormsType() {
  let [optionArray, setOptionArr] = useState([""]);
  let [fieldType, SetFieldType] = useState("text");
  let [itemName,SetItem]=useState("")
  let handleChange = (e) => {
    SetFieldType(e.target.value);
  };
  let AddOneOption = (e) => {
    e.preventDefault();
    setOptionArr((optionArr) => [...optionArr, ""]);
  };
  let handleSubmit = (e)=>{
        e.preventDefault()
        SetItem(e.target.item.value)
        // console.log(e.target.op)
        optionArray.map((option,index)=>{
            optionArray[index] =e.target.op[index].value
        })
        console.log(optionArray)
        axios.post("http://127.0.0.1:8000",  {
            "item": itemName,
            "type": fieldType,
            "options": `${optionArray}`,
            "user": 1
          })
  }
  return (
    <>
      <div>
        <p>type of field</p>
        <select onChange={handleChange}>
          <option value="text">text field</option>
          <option value="multiple">multiple choice</option>
          <option value="dropDownList">drop down list</option>
        </select>
        {fieldType == "text" && (
          <>
            <form onSubmit={handleSubmit}>
              <input type="text" name="item" placeholder="place the field label here" />
              <button type="submit">Save</button>
            </form>
          </>
        )}

        {fieldType == "multiple" && (
          <>
            <form onSubmit={handleSubmit}>
              <input type="text" name="item" placeholder="place the field label here" />
              {optionArray.map((option, index) => {
                return (
                  <input type="text" name={`op`} placeholder={"option " + (index + 1)} />
                );
              })}
              <button onClick={AddOneOption}>add option</button>
              <button type="submit">Save</button>
            </form>
          </>
        )}

        {fieldType == "dropDownList" && (
          <>
            <form onSubmit={handleSubmit}>
              <input type="text" name="item" placeholder="place the field label here" />
              {optionArray.map((item, index) => {
                return (
                  <input type="text" name={`op`} placeholder={"option " + (index + 1)} />
                );
              })}
              <button onClick={AddOneOption}>add option</button>
              <button type="submit">Save</button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
