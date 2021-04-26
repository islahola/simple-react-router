import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const MainLayout = props => {
    return (
        <React.Fragment>
            <Nav/>
                {props.children}
            <Footer/>
        </React.Fragment>
    )
}

export default MainLayout
