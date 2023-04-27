import React from 'react';
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-titile'>Sign Up </h2>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' placeholder='Your Email address' required />
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />

                    {/* <input className='signup-btn'>Log In</input> */}

                    <input className='login-btn' type="submit" value="Log In" />

                </div>
            </form>
        </div>
    );
};

export default SignUp;