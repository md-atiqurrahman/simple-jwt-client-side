import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        .then(res => res.json())
        .then(data => {
            if(data.success === true){
                localStorage.setItem('accessToken',data.accessToken)
                navigate('/orders')
            }
            else{
                console.log(data)
            }
        })
    }

    return (
        <div>
            <h1 className='my-4'>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <input className=' mb-2' type="email" placeholder='Enter your email' required name="email" id="" />
                <br />
                <input className='mb-2' type="password" placeholder='Enter password' required name="password" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;