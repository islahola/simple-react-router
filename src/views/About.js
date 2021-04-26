import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const About = () => {
    return (
        <div>
            <Nav/>
            <div style={container}>
                <h1>Page About</h1>
                <p>
                    Laborum esse ad nulla cupidatat aliqua. Labore aute et magna dolore minim commodo esse 
                    amet quis. Ut aute consequat et aliqua id excepteur elit elit ullamco Lorem aliquip irure.
                    Non est Laborum esse ad nulla cupidatat aliqua. Labore aute et magna dolore minim commodo esse 
                    amet quis. Ut aute consequat et aliqua id excepteur elit elit ullamco Lorem aliquip irure.
                    Non est exercitation anim adipisicing eu ad ut eu. Occaecat ut eiusmod id anim ad nulla minim ut eu ipsum. 
                    Lorem exercitation anim adipisicing eu ad ut eu. Occaecat ut eiusmod id anim ad nulla minim ut eu ipsum. 
                    Lorem commodo irure incididunt amet ipsum amet excepteur. Occaecat ut sit quis fugiat.    
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default About
const container={
    padding : "0 6rem"
}