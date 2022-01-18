import Head from 'next/head'
import TextField from "./components/TextField"
import axios from 'axios'
import { useState , useEffect } from 'react'
import AddButton from "./components/AddButton"
import FormsType from "./components/FormsType"
export default function Home() {
  let [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://127.0.0.1:8000").then(res=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])
  return (
    <div className="flex flex-col  justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 text-center">
            <h1>Create a form</h1>
            {data.map(item=>{
              return(<TextField item={item}/>)
            })}

            <AddButton />
            <FormsType/> 
      </main>

    </div>
  )
}
