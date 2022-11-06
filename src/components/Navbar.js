import React from 'react'
import PropTypes from 'prop-types'
import Themes from './Themes'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const navStyle={
        backgroundColor:props.theme.navBarColor,
    }
    const navTextStyle={
        color:props.theme.textColor,
    }

    props.document.body.style.backgroundColor=props.theme.bgColor;
    
    return (
        <nav className={`navbar navbar-expand-lg `} style={navStyle}>
            <div className="container-fluid" >
                <Link className="navbar-brand" to="/" style={navTextStyle}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{color:props.theme.textColor}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" style={navTextStyle} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={navTextStyle} to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                    {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div> */}

                    <Themes theme={props.theme} setTheme={props.setTheme}/>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}