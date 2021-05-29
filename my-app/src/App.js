import React from 'react';
import './App.css';
import TrainerContainer from './TrainerContainer'
import SessionForm from './SessionForm'

console.log('hello')

export default class App extends React.Component{

  state = {
    trainers: []
  }

  componentDidMount() {
    fetch('http://localhost:9292/trainers')
    .then(res => res.json())
    .then(trainers => this.setState(
        {trainers: trainers}))
    }
  

  render() {
    return (
      <div>
        <h1>Eat, Lift, Pray</h1>
        <SessionForm />
        <TrainerContainer trainers={this.state.trainers}/>
      </div>
    );



  }
}