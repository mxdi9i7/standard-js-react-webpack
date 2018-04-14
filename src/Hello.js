import React from 'react'
import './Hello.scss'

export default class Hello extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      message: 'world!'
    }
  }

  render () {
    return (
      <div className='container'>
        <h1>Hello, {this.state.message}</h1>
      </div>
    )
  }
}
