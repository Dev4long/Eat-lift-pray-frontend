import React from 'react';
import './App.css';
import TrainerContainer from './TrainerContainer'

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
       <TrainerContainer trainers={this.state.trainers}/>
      </div>
    );



  }
}