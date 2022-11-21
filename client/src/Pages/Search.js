import  { useState } from "react";
import Axios from "axios";
import  { useRef } from "react";
import React from "react";
import Selection from './Selection';
import './App.css';

function Search(props) {
  const userID = props.login;
  const selection = useRef(props.selection);
  const [search, setSearch] =useState("");
  const [optionValue, setOptionValue] = useState("author");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

  const [bookList, setBookList] =useState([]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const goSelection = () =>{
    selection.current=0;
    forceUpdate();
  };
  const getBooksAuthor = () =>{// we need to remove console logs and make it to where the inputs reset
    Axios.get('http://localhost:3001/getBooksAuthor', 
    {params:
      {userID: userID, author:search}}).then((response)=>
    {
      setBookList(response.data);
    });
  };
  const getBooksTitle = () =>{// we need to remove console logs and make it to where the inputs reset
    Axios.get('http://localhost:3001/getBooksTitle', 
    {params:
      {userID: userID, title:search}}).then((response)=>
    {
      setBookList(response.data);
    });
  };

  const Search = () =>{// we need to remove console logs and make it to where the inputs reset

    if(optionValue==="author"){
      console.log("author");
      getBooksAuthor();
    }
    else{
      console.log("title");
      getBooksTitle();
    }
  };

  const deleteBook = (bookNo) =>{
    console.log(bookNo);
    Axios.delete(`http://localhost:3001/delete/${bookNo}`);
    Search();
  };

  if(selection.current!==0){
    return (
      <div className='information'>
        <div>
          <label>Search Book:</label>
          <input type="text" onChange={(event)=>{setSearch(event.target.value)}}/>
          <select name="selectList" id="selectList" onChange={handleSelect}>
            <option value="author">Search By Author</option>
            <option value="title">Search By Title</option>
          </select>
          <button onClick={Search}>Find!</button>
        </div>
        {bookList.map((val,key)=>{
          return (
            <div>
              <div className="book">
                <p>{val.name}</p>
                <p>{val.author}</p>
                <p>{val.ISBN}</p>
              </div>
              <div>
                <button onClick={()=>{deleteBook(val.bookNo)}}>Delete</button>
              </div>
            </div>
          );
          }
        )}
        <button onClick={goSelection}>Go Back</button>
      </div>
    );
    }else{
      return(<Selection login={userID} selection={0}/>);
    }
}
export default Search;
