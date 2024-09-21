import { useState } from "react";
import React from "react";




function Login() {
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    
    

    return (
        <div class="mb-3">
            <label class="form-label"> Hi!</label>
            <br></br>
            <label class="form-label"> What`s your name? </label>
            <input class="form-control" name="UserName" placeholder="User Name" 
             onChange={(e) => setUserName(e.target.value)} ></input>
            <br></br>
            <label class="form-label"> What`s your email? </label>
            <input class="form-control" name="UserName" placeholder="User Name" 
             type={"email"} onChange={(e) => setUserEmail(e.target.value)} ></input>
        </div>
    );
}

export default Login;