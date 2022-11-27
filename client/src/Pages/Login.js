import  { useRef, useState } from "react";
import React from "react";
import Axios from "axios";
import Selection from "./Selection";
import './App.css';

function Login() {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const userData = useRef([]);
    const userID = useRef(0);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const findUser = async(callback) =>{
      Axios.get('http://localhost:3001/findUser', 
      {params:
        {email: email, password: password}}).then((response)=>
      {
        console.log("findUser is finished");
        userData.current = response.data;
        console.log(userData);
        callback();
      });
    };
    const addUser =  () =>{
      if((email!=='') && (password!=='')){
        console.log("add user start");
          if(userData.current.length===0){
              Axios.post('http://localhost:3001/createUser', 
              {email: email, password: password
              }).then(()=>
              {
              console.log("user added");
            });
          }
          else{
            console.log("user exists");
          }
      }
      else{
        console.log("you need password and a username");
      }
    };

    const loginUser = () =>{
      console.log("user login start");
      console.log(userData.current.length);
      if(userData.current.length===0){
        console.log("user does not exist");
      }
      else if(userData.current[0].password===password){
        console.log("log in successful");
        console.log(userData.current[0].userID);
        userID.current=userData.current[0].userID;
        forceUpdate();
      }
      else{
        console.log("password is wrong");
      }
    };
   
    const loginProtocol = async() => {
      await findUser(loginUser);
    }
    const addProtocol = async() => {
      await findUser(addUser);
    }
    if(userID.current===0){
      return(
        <div className='Login'>
          <div className='signupUser'>
              <label>Email:</label>
              <input type="text" onChange={(event)=>{setEmail(event.target.value)}}/>
              <label>Password:</label>
              <input type="text" onChange={(event)=>{setPassword(event.target.value)}}/>
              <button onClick={addProtocol}>Sign Up</button>
          </div>
          <div className='loginUser'>
            <label>Email:</label>
            <input type="text" onChange={(event)=>{setEmail(event.target.value)}}/>
            <label>Password:</label>
            <input type="text" onChange={(event)=>{setPassword(event.target.value)}}/>
            <button onClick={loginProtocol}>Login</button>
          </div>
        </div>
      );
    }else{
      return(
        <Selection login={userID.current} selection={0}/>
      );
    }
};

export default Login;
