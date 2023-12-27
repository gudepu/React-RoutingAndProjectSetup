import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            {/* <div classNameName="header">
                <a href="#default" classNameName="logo">CompanyLogo</a>
                <div classNameName="header-right"> */}
                    {/* <Link to='/contactus'>ContactUs</Link>
                    <Link to='/about'>About</Link> */}

                {/* </div>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <button type="button" classNameName="btn btn-outline-primary">Primary</button>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </div> */}


            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Logo</a>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                        <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                        <Link to="/">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header
