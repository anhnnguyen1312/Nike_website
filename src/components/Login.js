import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import redirect from 'react-router-dom'
export default function Login () 
{
    const login_data=[
        {
            uname:'user1',
            pword:'pass1'
        }
    ]
  const handleSubmit = (username, password) => {
    // const user = login_data.map(d => {
    //     if (d.uname === username){
    //         return d;
    //     }
    // })
    const user = login_data.find(d => d.uname===username)
    console.log("user",user)
    if (user){
        if(password === user.pword){
            // <redirect to ='/'> </redirect>
            window.location="http://localhost:3000/";            
            // return <Redirect to="/cart" />

        }
        else{
            alert("invalid password")
        }
    }
    else {
        alert("invalid username")
    }
  };
  return (
    <div className="App">
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}

function RegistrationForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEnable, setEnable] = useState(true);
  const handleKeyUp = () => {
    if (username.length > 0 && password.length > 0) setEnable(false);
    else setEnable(true);
  };
  return (
    <div>
      <label>User Name</label>
      <input
        type="text"
        id="username-input"
        placeholder="username"
        value={username}
        onKeyUp={handleKeyUp}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        id="password-input"
        placeholder="Password"
        onKeyUp={handleKeyUp}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />
      <button
        type="submit"
        id="button-input"
        disabled={isEnable}
        onClick={() => onSubmit(username, password)}
      >
        Register
      </button>
    </div>
  );
}


