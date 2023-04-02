import React, { Component } from 'react'
import './CSS/Display.css'
export default class Display extends Component {

    constructor(props) {
        super(props);
        console.log(props.value);
        console.log(props.clicked);
    }


    render() {
        return (
            <div className='Display'>
                <h1>EMPLOYEE FEEDBACK DATA</h1>
                <div className={"parent"}>
                    {this.props.value.map((item, index) => {
                        return (
                            <div key={index} className={"child"}>
                                Name: {item.name} Department: {item.dept} Rating: {item.rating}
                            </div>
                        )
                    })}
                </div>

                <button onClick={this.props.clicked}>Go Back</button>
            </div>
        )
    }
}
