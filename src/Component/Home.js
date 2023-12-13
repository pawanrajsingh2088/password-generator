import { useState } from "react"
import { useCallback } from "react"
import React from 'react'
import toast from "react-hot-toast"

export default function Home() {
    const [password, setpassword] = useState("")
    const [val, setval] = useState(4)
    const [num, setnum] = useState(false)
    const [char, setchar] = useState(false)

    const range = (e)=>{
        setval(e.target.value)
    }
    const toggle_num = ()=>{
        setnum((prev) =>{
            setnum(!prev)
        })
    }
    const toggle_char = ()=>{
        setchar((prev)=>{
            setchar(!prev)
        })
    }
    const passwordgenerator = useCallback(
      () => {
        let pass = ""
        let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        if(num===true){str=str+"0123456789"}
        if(char===true){str=str+"!@#$%^&*_;:'<>,/?~`"}

        for(let i=0;i<val;i++){
            let random = Math.floor(Math.random()*str.length +1)
            pass = pass + str.charAt(random)
        }
        setpassword(pass)
      },
      [val,num,char]
    )
    const copytext = () => {
        if (password === "") {
            toast.error("Empty Password")
        } else {
            navigator.clipboard.writeText(password)
            toast.success("Copied")
        }
    };
    
    
  return (
    <>
    <h1>Password Generator</h1>
    <div className="container">
        <div className="box1">
            <input type="text" readOnly value={password} />
            <button onClick={passwordgenerator}>Create</button>
            <button onClick={()=> copytext(password)}>Copy Text</button>
        </div>
        <div className="box2">
            <div className="one">
                <input className="range" id="range" type="range" value={val} onChange={range} min={4} max={16}/>
                <label for="range">Range ({val})</label>
            </div>
            <div className="two">
                <input id="num" value={num} onClick={toggle_num} type="checkbox" />
                <label for="num" >Number</label>
            </div>
            <div className="three">
                <input id="char" value={char} onClick={toggle_char} type="checkbox" />
                <label for="char">Special Character</label>
            </div>
        </div>
    </div>
    </>
  )
}