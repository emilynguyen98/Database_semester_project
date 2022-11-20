import Search from "./Search";
import AllBooks from "./AllBooks";
import AddBook from "./AddBook";
import  { useRef } from "react";
import React from "react";
import './App.css';


function Selection(props){
    const userID=props.login;
    const selection = useRef(props.selection);
    console.log(selection);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const GoSearch =  () =>{
        selection.current=1;
        forceUpdate();
    };
    const GoAll = () =>{
        selection.current=2;
        forceUpdate();
    };
    const GoAdd = () =>{
        selection.current=3;
        forceUpdate();
    };
    if(selection.current===0){
        return(
            <div>
                <button onClick={GoSearch}>Search</button>
                <button onClick={GoAll}>All Books</button>
                <button onClick={GoAdd}>Add Books</button>
            </div>
        );
    }
    else if(selection.current===1){
        return(<Search login={userID} selection={selection.current}/>);
    }
    else if(selection.current===2){        
        return(<AllBooks login={userID} selection={selection.current}/>);
    }
    else{
        return(<AddBook login={userID} selection={selection.current}/>)
    }


}
export default Selection;
