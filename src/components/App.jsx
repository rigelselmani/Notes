import React from 'react';
import Header from "./Header"
import Footer from "./Footer";
import Create from "./Create";
import Note from "./Note";

function App() {
  return (
    <div className="App">
      <Header />
      <Create />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
