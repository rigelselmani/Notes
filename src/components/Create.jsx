import React, { useState } from "react";

function Create(){

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event){
      const inputValue=event.target.value;
      setNote(inputValue);
    }

    return <div className="Comment">
              <input onChange={handleChange} type="text" placeholder="Title" name="title"/>
              <textarea onChange={handleChange} placeholder="Take a note..." rows="3" />
              <button>Add</button>
           </div>
}

export default Create;