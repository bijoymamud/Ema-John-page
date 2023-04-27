import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import "./Login.css";

const LogIn = () => {


    const { singIn, setUser } = useContext(AuthContext);


    const handleLogIn = event => {
        //reload problem solver jonno
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser);
                setUser(loggesUser);

                form.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-titile'>Log in </h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' placeholder='Your Email address' required />
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />

                    {/* <input className='signup-btn'>Log In</input> */}

                    <input className='login-btn' type="submit" value="Log In" />
                    <p className='sub-title'>
                        New to Ema-John? <Link className='link' to="/signup">Create New Account</Link>

                    </p>
                </div>
            </form>
        </div>
    );
};

export default LogIn; 