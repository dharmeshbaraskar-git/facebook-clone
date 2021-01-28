import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionType } from './reducer';
import { useStateValue } from './stateProvider';


function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.
            signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: "SET_USER",
                    user: result.user
                })

            })
            .catch(error => {
                alert(error.message);
            })
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
                <img className="login_face" width="150px" src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Login</Button>
        </div>
    );
}

export default Login;