import './App.css';
import  { useEffect, useRef, useState } from "react";
import Axios from "axios";


function Login(){
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const userData = useRef([]);

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
        console.log("add user start");
          if(userData.current.length==0){
              Axios.post('http://localhost:3001/createUser', 
              {name: name, email: email, password: password
              }).then(()=>
              {
              console.log("user added");
            });
          }
          else{
            console.log("user exists");
          }
      };

    const loginUser = () =>{
      console.log("user login start");
      console.log(userData.current.length);
      if(userData.current.length==0){
        console.log("user does not exist");
      }
      else if(userData.current[0].password==password){
        console.log("log in successful");
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
      return(
        <div className='Login'>
            <div className='signupUser'>
                <label>Email:</label>
                <input type="text" onChange={(event)=>{setEmail(event.target.value)}}/>
                <label>Password:</label>
                <input type="text" onChange={(event)=>{setPassword(event.target.value)}}/>
                <label>Name:</label>
                <input type="text" onChange={(event)=>{setName(event.target.value)}}/>
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
};

export default Login;
