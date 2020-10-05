import React,{useState} from 'react';
import Header from "./Header"
import Footer from "./Footer";
import Create from "./Create";
import Note from "./Note";

function App() {

  const [newNote,setNewNote]=useState([]);

  function submitNote(notes){
    setNewNote(prevVal=>{
      return [...prevVal,notes]
    })
  }
  return (
    <div className="App">
      <Header />
      <Create addNote={submitNote} />
      {newNote.map((text,index) =>{
        return ( 
          <Note 
          key={index}
          id={index} 
          title={text.title}
          content={text.content}/>
      )})}
      <Footer />
    </div>
  );
 }


export default App;
