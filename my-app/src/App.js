import React from 'react';
import './App.css';
import TrainerContainer from './TrainerContainer'
import MySessions from './MySessions'


export default class App extends React.Component{

  state = {
    trainers: [],
    mySessions: [],
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
        <MySessions />
        <TrainerContainer trainers={this.state.trainers}/>
      </div>
    );



  }
}




