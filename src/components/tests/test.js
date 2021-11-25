import React, { Component } from 'react'

class test extends Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
      title: data.title,
      body: data.body
    }))
  }

  render() {
    const {title, body} = this.state; 
    return (      
      <div>
        <h1 className="display-4"><span className="text-danger">Test</span> Component</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
  }
}
export default test;