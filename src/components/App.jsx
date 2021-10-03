import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App(){
	const [notes,setnotes] = useState([]);

  function addNote(note){
     setnotes((prevValue)=>{
     	return[...prevValue,note];
     });

  }

	function deleteNote(id){
     setnotes((prevValue)=>{
			 return prevValue.filter((item,index)=>{
				 return index !== id;
			 })
		 });
	}

	return(
	<div>
		<Header />
		<CreateNote addNote={addNote}/>
	    <div className = "collection">
		  {notes.map((note,index)=>{
				return(
					<Note key={index} index={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
				)
			})}
	    </div>
	    <Footer />
	   </div>
	  );
}

export default App;
