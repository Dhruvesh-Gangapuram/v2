import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';
// export default function 
const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    
    const loginUser =async (e)=>{
    e.preventDefault();
    
    const res = await fetch("/signin",{
        method:"POST",
        headers: {
           "Content-type":"application/json",
        },body:JSON.stringify({
            email,
            password
        }),
});
        const data = await res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }else{
            // window.alert("login succeful");
            navigate('/signin');
        }

}



    return (
        <form method='POST' className="container h-80 w-80 p-3 bg-white shadow-xl">
            <h1 className='text-4xl font-sans font-bold'>Login</h1>
            <input className='input_field' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' ></input>
            <input type='password' className='input_field' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' ></input>
            <Link className='text-darkBlue text-sm relative top-5 block float-right' to='/' >Forgot Password?</Link>
            <button className='block h-12 w-40 bg-darkBlue mt-10 mb-2 rounded' >
                <span  type='submit' name='signin' className='text-white font-medium text-2xl'
                value='Log In'
                onClick={loginUser} >Login</span>
            </button>
            <Link className='text-darkBlue' to='/register' >Register your account</Link>
        </form>
    )

}

export default Login