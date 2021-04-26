import React from 'react'

const Nav = () => {
    return (
        <div style={nav}>
            <h1>IslahOlla</h1>
            <ul style={link}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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
    width :"20%"
}