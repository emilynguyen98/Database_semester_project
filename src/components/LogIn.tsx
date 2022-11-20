import { Stack, TextField, CompoundButton, IStackTokens, Text, PrimaryButton } from '@fluentui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stackTokens: IStackTokens = { childrenGap: 60};
const buttonsStackTokens: IStackTokens = { childrenGap: 60};
const headerStackTokens: IStackTokens = { childrenGap: 15};

const LogIn = () => {

    const navigate = useNavigate();
    const [onLogIn, setOnLogIn] = useState(true);
    const [onSignUp, setOnSignUp] = useState(false);

    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    
    function onLogInClicked() : void {
      setOnLogIn(true);
      setOnSignUp(false);
    }
  
    function onSignUpClicked() : void {
      setOnLogIn(false);
      setOnSignUp(true);
    }
  
    function onLogInSubmit():void {
      // do verification 
        navigate('/home'); 
    }

    function onSignUpSubmit():void {
      navigate('/home'); 
  }

  return (
    <Stack className='container' horizontalAlign="center" verticalAlign="center" verticalFill tokens={stackTokens}>
        <Stack className='container_header' horizontalAlign="center" verticalAlign="center" verticalFill tokens={headerStackTokens} >
          <h1 className=''>Personal Library</h1>
          <Text className="container_quote" variant="large">"A reader lives a thousand lives before he dies"</Text>
        </Stack>
        <Stack className="container_buttonStack" horizontal tokens={buttonsStackTokens} horizontalAlign="center">
          <CompoundButton primary secondaryText="Access to your library" disabled={false} checked={onLogIn} onClick={onLogInClicked}>
          Log In
          </CompoundButton>
          <CompoundButton primary secondaryText="Create you own library" disabled={false} checked={onSignUp} onClick={onSignUpClicked}>
            Sign Up
          </CompoundButton>
        </Stack>
        <div>
          {onLogIn ? 
            (   <Stack className="inputLists" horizontalAlign="center" verticalAlign="center" verticalFill tokens={headerStackTokens} >
                    <TextField className="input" label="Email" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <TextField className="input" label="Password" placeholder="abc123" onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <PrimaryButton text={'Log In'} onClick={onLogInSubmit} allowDisabledFocus disabled={false} checked={false} />
                </Stack> )
            : 
            (   <Stack className="inputLists" horizontalAlign="center" verticalAlign="center" verticalFill tokens={headerStackTokens} >
                    <TextField className="input" label="Name" placeholder="J. K. Rowling" onChange={(e) => setName(e.currentTarget.value)}/>
                    <TextField className="input" label="Email" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <TextField className="input" label="Password" placeholder="abc123" onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <PrimaryButton text={'Sign Up'} onClick={onSignUpSubmit} allowDisabledFocus disabled={false} checked={false} />
                </Stack> )
            }
        </div>        
      </Stack>
  )
}

export default LogIn
