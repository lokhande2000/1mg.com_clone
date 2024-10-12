import React, { useState } from 'react'

const FromBuilder = () => {
    const [todo, setTodo] = useState({
        name:"",
        difficulty:1,
        status: false,
    })
    const [arr, setArr]=useState([])
    const {name, difficulty, status} = todo

    function handleSubmit(e){
        e.preventDefault()
        setArr(todo)
        setTodo({
            name:"",
            difficulty:1,
            status: false,
        })
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setTodo({...todo, [name]: e.target.value})}/>
        <select  value={difficulty} onChange={(e)=>setTodo({...todo, [difficulty] : e.target.value})}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <input type="checkbox" value={status} onChange={(e)=>setTodo({...todo, [status] : !e.target.value})} />

        <input type="subbmit" />
      </form>
    </div>
  )
}

export default FromBuilder
