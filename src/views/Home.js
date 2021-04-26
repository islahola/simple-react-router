import React, { Component } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <h1>Ini home</h1>
                <Footer/>
            </div>
        )
    }
}

export default Home
