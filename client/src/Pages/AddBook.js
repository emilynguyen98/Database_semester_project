import './App.css';
import  { useState } from "react";
import Axios from "axios";
import  { useRef } from "react";
import React from "react";
import Selection from './Selection';

function AddBook(props) {
  const userID = props.login;
  const selection = useRef(props.selection);
  const [name, setName] =useState("");
  const [author, setAuthor] =useState("");
  const [ISBN, setISBN] =useState(0);// consider excluding this and replacing it with physical. Mention adding functionallity later
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const goSelection = () =>{
    selection.current=0;
    forceUpdate();
  };
  const addBook = () =>{// we need to remove console logs and make it to where the inputs reset
    Axios.post('http://localhost:3001/createBook', 
    {userID: userID, name: name, author: author, ISBN: ISBN
    }).then((response)=>
    {
      console.log(response.data);
    });
    console.log("clear inputs");
    document.getElementById('inputName').value = '';
    document.getElementById('inputAuthor').value = '';
    document.getElementById('inputISBN').value = '';
  };
  if(selection.current!==0){
    return (
      <div className='App'>
        <div className='addBook'>
          <label>Book Name:</label>
          <input type="text" id="inputName" onChange={(event)=>{setName(event.target.value)}}/>
          <label>Author:</label>
          <input type="text" id="inputAuthor" onChange={(event)=>{setAuthor(event.target.value)}}/>
          <label>ISBN:</label>
          <input type="number" id="inputISBN" onChange={(event)=>{setISBN(event.target.value)}}/>
          <button onClick={addBook}>Add Book</button>
          <button onClick={goSelection}>Go Back</button>
        </div>
      </div>
      );
    }
    else{
      return(<Selection login={userID} selection={0}/>);
    }
}

export default AddBook;
