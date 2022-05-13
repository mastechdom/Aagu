import Google from "../img/google.png";
import axios from 'axios';
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const submit = async (e) => {
    e.preventDefault();
    const newUser = {email: email, password: password};

    console.log("res", newUser)
    await axios.post("http://localhost:5000/email",{email, password}).then((res) =>{
      console.log("reaponse",res)
    }).catch((err)=>{
      console.log(err)
    })
  };


  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          {/* <form method="POST"> */}
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Username" id="email" value={email} />
            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password" value={password} />
            <button className="submit" onClick={submit}>Login</button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
