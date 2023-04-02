import React, { Component } from 'react'
import './CSS/Form.css'
import Display from './Display'

export default class Form extends Component {

  state = {
    name: "",
    department: "",
    rating: "",
    array: [],
    clicked: true,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  toggle = () => {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  handleSubmit = () => {
    const obj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
    }

    this.state.array.push(obj);
    this.setState({
      array: this.state.array,
      clicked: false,
      name: '',
      dept: '',
      rating: '',
    })

  }
  render() {
    return (
      <>{this.state.clicked ?
        <div className='Container'>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div className='Form'>
            <label>Name: </label>
            <input type={String} name={"name"} onChange={this.handleChange} />
            <br/>
            <label>Department: </label>
            <input type={String} name={"dept"} onChange={this.handleChange} />
            <br/>
            <label>Rating: </label>
            <input type={Number} name={"rating"} onChange={this.handleChange} />
            <br/>
            <button type={'submit'} onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
        :
        <Display value={this.state.array} clicked={this.toggle} />
      }
      </>
    )
  }
}
