import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className='header'>
                <Link to='/' className='logo'>
                    <h1>
                        Craigslist
                        <img src='./pictures/peace.png' alt='' height='60px' width='60px' />
                    </h1>
                </Link>
                <h1>City, ST</h1>
                <div className='header-misc'>
                    <ul>
                        <li><button type='button'>Event Calendar</button></li>
                        <li><button type='button'>My Account</button></li>
                        <li><input type='text' placeholder='Search Bar' name='search'></input></li>
                    </ul>
                </div>
            </header>
            <div className='nav'>
                <navbar>
                    <div className='nav-links'>
                        <ul>
                            <li><Link to='/'>Community</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Services</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Forums</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Housing</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Sales</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Jobs</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Gigs</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Resumes</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/'>Misc</Link></li>
                        </ul>
                    </div>
                </navbar>
            </div>
        </div>
    );
}

export default Navbar