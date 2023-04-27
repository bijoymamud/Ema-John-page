import React from 'react';
import "./Login.css";

const LogIn = () => {
    return (
        <div className='form-container'>
            <h2 className='form-titile'>Log in </h2>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' placeholder='Your Email address' required />
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />

                    {/* <input className='signup-btn'>Log In</input> */}

                    <input className='login-btn' type="submit" value="Log In" />
                    <p>
                        New to Ema-John?

                    </p>
                </div>
            </form>
        </div>
    );
};

export default LogIn; 