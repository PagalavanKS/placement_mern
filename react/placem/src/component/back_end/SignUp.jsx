import axios from 'axios'
import React from 'react'

const SignUp = () => {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    age:'',
    password: ''
  })
  var [ErrorMsg,setErrorMsg]=React.useState("")
  var [successMsg,setSuccessMsg]=React.useState("")
  const handlesubmit=async()=>{
    setErrorMsg("")
    setSuccessMsg("")
    try{
     var response=await axios.post('http://localhost:3000/signup',user)
    setSuccessMsg(response.data.message)
    }catch(err){
      if(err.response&&err.response.data&&err.response.data.error){
      setErrorMsg(err.response.data.error)}
      else{ setErrorMsg("Something went wrong")}
    }

  }

  return (
    <div>
      <label>sign-up</label>
      <input type='text' placeholder='Name' value={user.name} onChange={(e) => setUser({...user, name: e.target.value })} />
      <input type='email' placeholder='Email' value={user.email} onChange={(e)=>{setUser({...user,email: e.target.value})}}/>
      <input type='number' placeholder='Age' value={user.age} onChange={(e)=>{setUser({...user,age:e.target.value})}}/>
      <input type='password' placeholder='Password' value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
      <button onClick={handlesubmit}>Submit</button>
      {ErrorMsg && <p style={{ color: 'red' }}>{ErrorMsg}</p>}
      {successMsg && <p style={{ color: 'green'}}>{successMsg}</p>}
    </div>
  )
}

export default SignUp