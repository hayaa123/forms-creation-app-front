import Head from 'next/head'
import TextField from "./components/TextField"
import axios from 'axios'
import { useState , useEffect } from 'react'
import AddButton from "./components/AddButton"
import FormsType from "./components/FormsType"
import MultipleChoice from "./components/MultipleChoice"
import DropDownList from "./components/DropDownList"
export default function Home() {
  let [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000").then(res=>{
      setData(res.data)
      // console.log(res.data)
    })
  },[])

  let deleteElement = async(id)=>{
    await axios.delete(`http://127.0.0.1:8000/${id}/`)
    axios.get("http://127.0.0.1:8000").then(res=>{
    setData(res.data)
    })
  }
  let editElement =(e)=>{
    e.preventDefault()
    let options = []
    if (e.target.op){
      e.target.op.map(option=>
        {options.push(option)}
      )
      }
    
    axios.put(`http://127.0.0.1:8000/${id}/`,{"item":e.target.item.value,"options":options,"type":e.target.type.value})
    axios.get("http://127.0.0.1:8000").then(res=>{
    setData(res.data)
    })
  }
  return (
    <div className="flex flex-col  justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 text-center">
            <h1>Create a form</h1>
            {data.map(item=>{
              if (item.type =="text_field"){
                return(<TextField item={item} deleteElement={deleteElement}/>)
              }
              else if (item.type == "multiple"){
                return(<MultipleChoice item={item} deleteElement={deleteElement}/>)
              }
              else if (item.type =="dropDownList"){
                return(<DropDownList item={item} deleteElement={deleteElement}/>)

              }
            })}

            <AddButton />
            <FormsType/> 
      </main>

    </div>
  )
}
