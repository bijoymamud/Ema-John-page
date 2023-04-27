import React, { useContext } from 'react';

import './Header.css';

import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/logIn">LogIn</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='gmail'>{user.email} <button className='btn-top' onClick={handleLogOut}>LogOut</button> </span>}
            </div>
        </nav>
    );
};

export default Header;

