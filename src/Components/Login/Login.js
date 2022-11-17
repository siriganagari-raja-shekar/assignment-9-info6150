import React from 'react';
import './Login.scss';
import axios from "axios";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Login = () => {


    const Notification = (props) =>{
        const paraStyle = {
            fontSize: "1.5rem",
            fontStyle: "italic",
            color: "red"
        }
        return(
            <>
                <p style={paraStyle}>{props.errorMessage}</p>
            </>
        )
    }

    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);



    const onLoginButtonClicked = async (event) =>{
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("userpass").value.trim();

        if(email.length === 0){
            window.alert("Please enter email in proper format");
            return;
        }
        if(password.length === 0){
            window.alert("Please enter password in correct format");
            return;
        }

        axios.post("http://localhost:5000/user/login",{
            email: email,
            password: password
        })
        .then((res) =>{
            if(res.status === 200){
                sessionStorage.setItem("user",JSON.stringify(res.data));
                setUser(res.data);
            }
            console.log(res);
        })
        .catch((err)=>{
            setErrorMessage("Username or password is incorrect. Please try again");
            setTimeout(()=>{
                setErrorMessage("");
            }, 5000);
        });
        
    }

    const userStored = sessionStorage.getItem("user");

    if(userStored){
        return(
            <Navigate to="/home"/>
        )
    }
  return (
    <>

        <div className="loginContainer">
            { user ? <Navigate to="/home"/> : <></>}

            <h1>Login</h1>
            <Notification errorMessage={errorMessage}/>
            <div>
                <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="email"/>
            </div>

            <div>
                <label htmlFor="userpass">Password</label>
                <input type="password" id="userpass"/>
            </div>
            <button type="button" onClick={onLoginButtonClicked}>Login</button> 

        </div>  
    </>

  );
};

