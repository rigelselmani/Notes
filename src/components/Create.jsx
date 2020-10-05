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

    return <div className="Comment">
              <input onChange={handleChange} type="text" placeholder="Title" name="title"/>
              <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
              <button onClick={handleClick}>Add</button>
           </div>
}

export default Create;