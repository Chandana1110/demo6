import React, { Component } from 'react'
import "./style.scss"

import Child_component from "./child_component.jsx"

export default class page1 extends Component {

    state={
        child_style:{
            // color:"white",
        }
    }

    // Life cycle method

    componentWillMount(){
        //it will be executed first time before render

        // alert("stop")

        let child_style=this.state.child_style
        child_style["color"]="blue"
        this.setState({child_style:child_style},console.log(this.state))

    }

    componentDidMount(){
         //it will be executed first time after render


        setInterval(() => {
            let child_style=this.state.child_style
            child_style["color"]="red"
            this.setState({child_style:child_style},console.log(this.state))
        }, 5000);

    }

    componentDidUpdate(){

        // it will be executed on each time after re-render ex: when u update the state value

        console.log("componentDidUpdate executed")

    }


    componentWillUnmount(){

        // before navigating to another page 

        alert("leaving page")

    }
    


    render() {
        return (
            <div className="page1">
                <h1>Page1</h1>
                <h2>Initial page</h2>
                <a href="#page2">Open page2</a>


                <br />
                <input type="text" onChange={(e)=>{
                    let child_style=this.state.child_style
                    child_style["color"]=e.target.value
                    this.setState({child_style:child_style},console.log(this.state))
                }}  />

                <p>Current color: {this.state.child_style && this.state.child_style.color?this.state.child_style.color:""}</p>
                <br />

                
                <Child_component child_style={this.state.child_style}/>

               

            </div>
        )
    }
}
