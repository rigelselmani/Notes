import React from "react";

function Create(){
    return <div className="Comment">
              <input type="text" placeholder="Title" name="title"/>
              <input type="text" placeholder="content" name="content" />
              <button>Add</button>
           </div>
}

export default Create;