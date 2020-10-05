import React from "react";

function Create(){

    

    function handleChange(event){
      const inputValue=event.target.value;
      console.log(inputValue)
    }

    return <div className="Comment">
              <input onChange={handleChange} type="text" placeholder="Title" name="title"/>
              <textarea onChange={handleChange} placeholder="Take a note..." rows="3" />
              <button>Add</button>
           </div>
}

export default Create;