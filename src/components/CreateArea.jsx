import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded , setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expanded(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      
        {isExpanded && <input
          name="title"
          onChange={handelChange}
          value={note.title}
          placeholder="Title"
        />}

        <textarea
          name="content"
          onClick={expanded}
          onChange={handelChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3: 1}
        />
        <Zoom in={isExpanded && true}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
