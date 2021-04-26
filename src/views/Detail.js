import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import ReactImg from '../image/react.png'
import JsImg from '../image/js.png'
import VueImg from '../image/vuejs.jpeg'
import SvImg from '../image/sveltejs.png'


class componentName extends Component {
    state = {
        skills :[
            {
                id : 1,
                name : "Javascript",
                describe : "Javascript description",
                image : `${JsImg}`
            },
            {
                id : 2,
                name : "React",
                describe : "React Description",
                image : `${ReactImg}`
            },
            {
                id : 3,
                name : "Vue",
                describe : "Vue Description",
                image : `${VueImg}`
            },
            {
                id : 4,
                name : "Svelte",
                describe : "Svelte description",
                image :`${SvImg}`
            }
        ],
        data : ""
    }

    componentDidMount(){
        const id = this.props.match.params.id
        const data = this.state.skills.find(item => item.id === parseInt(id))
        this.setState({data})
    }
    render () {
        const {data} = this.state
        return (
            <MainLayout>
                <div style={container}>
                    <h1>{data.name}</h1>
                    <div style={box}>
                        <img src={data.image}  style={img} alt ={data.name}/>
                        <div>
                            <p>{data.describe}</p>
                            <Link to="/">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}
export default componentName
const container ={
    padding: "0 6rem"
}
const img ={
    width : "15rem",
    height: "20rem",
    marginRight: "2rem"
}
const box ={
    display: "flex"
}