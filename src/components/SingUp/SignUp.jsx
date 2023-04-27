import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {

    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        //! validatino of password

        if (password !== confirm) {
            //match na hle error dewa uchit. r error dite hle state declare korte hoy

        }
    }
    return (
        <div className='form-container'>
            <h2 className='form-titile'>Sign Up </h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' placeholder='Your Email address' required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Your password' required />

                    {/* <input className='signup-btn'>Log In</input> */}

                    <input className='login-btn' type="submit" value="Sign Up" />

                    <p className='sub-title'><small>Already have an account?</small> <Link className='link' to="/login">Login</Link></p>

                </div>
            </form>
        </div>
    );
};

export default SignUp;