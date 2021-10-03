import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function Note(props){
	return(
      <div className="note">
			 <div className="text">
      	<h3>{props.title}</h3>
      	<p>{props.content}</p>
				</div>
				<button onClick={()=>{
					props.deleteNote(props.index);
				}}>
				<DeleteIcon />
				</button>
      </div>
	);
}

export default Note;
