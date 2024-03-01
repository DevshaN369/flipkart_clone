import React, { useState } from "react";
import "./LoginModal.css";
import {RxCross2} from 'react-icons/rx'
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/userSlice";
const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);
const Dispatch=useDispatch()
  const signup=async()=>{
// const {data,error}=await supabase.auth.signUp({
//   email:email,
//   password:password
// })
// console.log(data,error);
// if(data.user !==null){
//   alert('Account Created Successfully')
// }
  }
  const login=async()=>{
    // const {data,error}= await supabase.auth.signInWithPassword({
    //   email,password
    // })
    // if(data.user !==null){
    //   setEmail("")
    //   setPassword("")
    //   Dispatch(addUser(data.user))
    //   alert('Login Successfully')
    // }
    // if(error){
    // alert(error.message)}
    // return
  }
  return isOpen ? 
  <div className="overlay">
    <div className="loginModal">
<div className="left">
    <div className="left_container">
        <p className="login_title">Login</p>
        <p className="login_des">
            Get Access to your Orders,Whishlist and Recommendations
        </p>
    </div>
</div>
<div className="right">
  <input
  type="email"
  className="login_input"
  placeholder="Enter Email"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  />
    <input
  type="password"
  className="login_input"
  placeholder="Enter Password"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  />
  <p className="termsandcon">
    By continuing you agree to Flipkart's" "
    <span style={{color:'blue'}}>Terms of Use</span>
    <span style={{color:'blue'}}>Privacy Policy..</span>
  </p>
  {
    loginType ?(
      <button className="login_btn" onClick={login}>Login</button>
    ):(
      <button className="login_btn" onClick={signup}>Signup</button>

    )
  }
  {
    loginType?(
      <p className="login_sigup" onClick={()=>setLoginType(false)}>
        how to Flipkart? Create an account
      </p>
    ):(
      <p className="login_sigup" onClick={()=>setLoginType(true)}>Alreay an user? login to account</p>
    )
  }
</div>
<div className="close" onClick={()=>setIsOpen(false)}>
<RxCross2/>

</div>
    </div>
  </div> : <></>;
};

export default LoginModal;
