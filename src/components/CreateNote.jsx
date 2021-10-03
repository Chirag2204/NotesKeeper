import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateNote(props){
  const[note,setNote] = useState({
    title : "",
    content : ""
  });

  function handleChange(event){
     const newValue = event.target.value;
     const field = event.target.name;
     setNote((prevValue)=>{
        if(field === "title"){
        	return{
        		title : newValue,
        		content : prevValue.content
        	};
        }
        if(field === "content"){
        	return{
        		title : prevValue.title,
        		content : newValue
        	};
        }
     })
  }

  function handleClick(event){
    props.addNote(note);
    event.preventDefault();
    setNote({
      title : "",
      content : ""
    })
  }

  return(
     <div className="totalContainer">
		  <div className="userInput">
		   <form>
		  	<input onChange={handleChange} type="text" name="title" placeholder="Title" value={note.title}/>
		  	<textarea onChange={handleChange} name="content" placeholder="Add a note here" value={note.content}/>
		  	<Fab color="orange" onClick={handleClick}><AddIcon /></Fab>
        </form>
		  </div>
	</div>
  	);
}

export default CreateNote;
