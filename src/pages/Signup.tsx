import { useState ,ChangeEvent} from 'react'
import { Link } from 'react-router-dom';
import {SignupUser} from '../store/authStore'

type SignupForm = {
    email:string,
    name:string,
    password:string
}

const Signup = ()=>{
    //   const [loginForm,setLoginForm]=useState<SignupForm>({email:'',password:'',name:''})
      const {email,password,name,setSignup}=SignupUser();

      const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name ==="email"){
         return SignupUser({password,name,email:e.target.value});
        }
        else if (e.target.name ==="name"){
            return SignupUser({email,password,name:e.target.value});
        }
        SignupUser({email,name,password:e.target.value});
      }

    return (
        <div className='container_div'>
         <input className='input_container' onChange={handleChange} name="name" placeholder='Enter Name' />
         <input className='input_container' onChange={handleChange} name="email" placeholder='Enter Email' />
         <input className='input_container' onChange={handleChange} name="password" placeholder='Enter Password' />
         <button className='btn'>  <Link style={{color:'white'}} to="/">Signup User </Link></button>
         <Link to="/">Go to Login</Link>
        </div>
    )
}
export default Signup;