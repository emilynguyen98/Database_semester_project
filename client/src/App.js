import './App.css';
import  { useState } from "react";
import Axios from "axios";



function App() {
  const [userID, setuserID] =useState(0);// we need to make this not a input field but a prop that is passed into the system
  const [name, setName] =useState("");
  const [author, setAuthor] =useState("");
  const [ISBN, setISBN] =useState(0);// consider excluding this and replacing it with physical. Mention adding functionallity later

  const [bookList, setBookList] =useState([]);

  const addBook = () =>{// we need to remove console logs and make it to where the inputs reset
    Axios.post('http://localhost:3001/createBook', 
    {userID: userID, name: name, author: author, ISBN: ISBN
    }).then((response)=>
    {
      console.log(response.data);
    });
    console.log("clear inputs");
    document.getElementById('inputID').value = '';
    document.getElementById('inputName').value = '';
    document.getElementById('inputAuthor').value = '';
    document.getElementById('inputISBN').value = '';
  };

  const getBooks = () =>{// we need to remove console logs and make it to where the inputs reset
    console.log(userID);
    Axios.get('http://localhost:3001/getBooks', 
    {params:
      {userID: userID}}).then((response)=>
    {
      console.log(response.data);
      console.log("We have made it to here with no success");
      setBookList(response.data);
    });
  };
    return (
    <div className='App'>
      <div className='information'>
        <p>This is the input field</p>
        <label>userID:</label>
        <input type="number" id="inputID" onChange={(event)=>{setuserID(event.target.value)}}/>
        <label>Book Name:</label>
        <input type="text" id="inputName" onChange={(event)=>{setName(event.target.value)}}/>
        <label>Author:</label>
        <input type="text" id="inputAuthor" onChange={(event)=>{setAuthor(event.target.value)}}/>
        <label>ISBN:</label>
        <input type="number" id="inputISBN" onChange={(event)=>{setISBN(event.target.value)}}/>
        <button onClick={addBook}>Add Book</button>
      </div>
      <div className='information'>
        <p>This is where the data will be shown:</p>
        <button onClick={getBooks}>Show Books</button>
        {bookList.map((val,key)=>{
          return (
            <h1>{val.name}</h1>
          );
          }
        )}
      </div>
    </div>
  );
}

export default App;
