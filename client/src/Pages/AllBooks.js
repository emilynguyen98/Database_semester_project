import  { useState } from "react";
import Axios from "axios";
import  { useRef } from "react";
import React from "react";
import Selection from './Selection';
import './App.css';

function AllBooks(props) {
  const userID = props.login;
  const selection = useRef(props.selection);
  const [bookList, setBookList] =useState([]);
  //const bookList=useRef();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const goSelection = () =>{
    selection.current=0;
    forceUpdate();
  };
  const getBooks = () =>{// we need to remove console logs and make it to where the inputs reset
    Axios.get('http://localhost:3001/getBooks', 
    {params:
      {userID: userID}}).then((response)=>
    {
      setBookList(response.data);
    });
  };
  const deleteBook = (bookNo) =>{
    console.log(bookNo);
    Axios.delete(`http://localhost:3001/delete/${bookNo}`);
    getBooks();
  };
  getBooks();
  if(selection.current!==0){
    return (
      <div className='information'>
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

export default AllBooks;
