import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div style={nav}>
            <h1><Link to ="/" style={to}>IslahOlla</Link></h1>
            <ul style={link}>
                <li><Link to="/" style={to}> Home</Link></li>
                <li><Link to="/about" style={to}> About</Link></li>
                <li><Link to="/contact" style={to}> Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav
const nav ={
    display :"flex",
    background :"#fe024e",
    padding : "0 6rem",
    justifyContent:"space-between",
    color :"#fff",
    alignItems:"center"
}

const link ={
    display :"flex",
    listStyle: 'none',
    justifyContent :"space-between",
    width :"20%",
    
}
const to ={
    cursor: 'pointer',
    textDecoration: "none",
    color:"#fff"
}