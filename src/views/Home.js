import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout'
import {Link} from 'react-router-dom'
export class Home extends Component {
    state = {
        skills :[
            {
                id : 1,
                name : "Javascript",
                describe : "Javascript description",
                image : require("../image/js.png")
            },
            {
                id : 2,
                name : "React",
                describe : "React Description",
                image : require("../image/react.png")
            },
            {
                id : 3,
                name : "Vue",
                describe : "Vue Description",
                image : require("../image/vuejs.jpeg")
            },
            {
                id : 4,
                name : "Svelte",
                describe : "Svelte description",
                image :require("../image/sveltejs.png")
            }
        ]
    }
    render() {
        const {skills} = this.state
        return (
            <MainLayout>
                <h1 style={{paddingLeft:"6rem"}}>Ini home</h1>
                <div style={container}>
                    {skills.map (item =>
                        <div key ={item.id} style={card}>
                            <Link style={{textDecoration:"none", color:"#000"}} to={`/detail/${item.id}`}>
                                <h3>{item.name}</h3>
                                <img src={item.image.default} style={gambar} alt ={item.name}/>
                            </Link>
                        </div>    
                    )}
                </div>
            </MainLayout>
        )
    }
}

export default Home
const container = {
    display : "flex",
    padding: "0 6rem",
    justifyContent: 'space-between',
}
const card ={
    width: "20%",
    height: "15rem"
}
const gambar = {
    width :"100%",
    height:"100%"
}