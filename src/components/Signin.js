import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";
import './LoginForm.css'


export default function Signin() {
    const [formData, setFormData] = useState({email: '',password: ''});
    const login_data=[
        {
            uname:'user@gmail.com',
            pword:'pass'
        }
    ]
    const handleSubmit= (e) => {
       e.preventDefault();
       console.log("user",formData)
        const user = login_data.find(d => d.uname === formData.email)
    console.log("user",user)
    if (user){
        if(formData.password === user.pword){
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
  
    }

    const handleChange= (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]: value,

    })
        console.log("change",e.target.value)
        console.log("change",e.target.name)

    }
    return (
        <>
         <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
            onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div>
        </form>
      </div>
        </>
    )
}