import React, { useState } from "react";

function Create(props){

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event){
      const {value,name}=event.target;
      setNote(inputValue=>{
         return {
             ...inputValue,
             [name]:value
         }
      });
    }

    function handleClick(event){
        props.addNote(note);
        setNote({
              title:"",
              content:""
        })

        event.preventDefault()
    }

    return <div>
             <form>
              <input onChange={handleChange} value={note.title} type="text" placeholder="Title" name="title"/>
              <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
              <button onClick={handleClick}>Add</button>
             </form>   
           </div>
}

export default Create;