import React,{useState} from 'react'

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")


    const handelSubmit = (e)=>{
        e.preventDefault();
        const response = {
          email,
          password
        }
        console.log(response);
    }
  return (
    <div>
        <h1>Login</h1>
           <label htmlFor='username'/>
           <input type="email" placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}/>
           <label htmlFor='password'/>
           <input type="password" placeholder='*****'  value={password} onChange={e=>setPassword(e.target.value)}/>
           <button onClick={handelSubmit}>Button</button>
    </div>
  )
}

export default Login
