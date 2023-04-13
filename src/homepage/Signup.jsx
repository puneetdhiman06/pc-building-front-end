import React,{useState} from 'react'

const Signup = () => {
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")


    const handelSubmit = (e)=>{
        e.preventDefault();
        const response = {
          fname,
          lname,
          email,
          password
        }
        console.log(response);
    }
  return (
    <div>
        <h1>Signup</h1>
           <label htmlFor='firstname'/>
           <input type="text" placeholder='First Name' value={fname} onChange={e=>setFname(e.target.value)}/>
           <label htmlFor='lastname'/>
           <input type="text" placeholder='Last Name' value={lname} onChange={e=>setLname(e.target.value)}/>
           <label htmlFor='username'/>
           <input type="email" placeholder='Email'  value={email} onChange={e=>setEmail(e.target.value)}/>
           <label htmlFor='password'/>
           <input type="password" placeholder='*****'  value={password} onChange={e=>setPassword(e.target.value)}/>
           <button onClick={handelSubmit}>Button</button>
    </div>
  )
}

export default Signup
