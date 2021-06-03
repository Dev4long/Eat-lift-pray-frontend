import React from 'react';
import './App.css';
import TrainerContainer from './TrainerContainer'
import MySessions from './MySessions'
import LoginForm from './LoginForm'


export default class App extends React.Component{
   
  state = {
    trainers: [],
    mySessions: {sessions: []},
  }

  componentDidMount() {
    fetch('http://localhost:9292/trainers')
    .then(res => res.json())
    .then(trainers => this.setState(
        {trainers: trainers}))

        // fetch('http://localhost:9292/clients')
        // .then(res => res.json())
        // .then(clients => this.setState({mySessions: clients.find(client =>  client.id === 1)}))
        
  
    }

   
      
    addSession = (sessionObj) => {
      let newSessionArray = [this.state.mySessions.sessions]
      newSessionArray.push(sessionObj)
      this.setState({mySessions: {sessions:newSessionArray}})
      console.log(newSessionArray)
    }

    clientLogin = (clientObj) => {
    this.setState({mySessions: {sessions:[clientObj.sessions]}})
    // console.log(clientObj.sessions)
    }



  render() {
    console.log(this.state.mySessions.sessions)
    
   
    
    return (
      <div>
        <h1>Eat, Lift, Pray</h1>
        <LoginForm clientLogin={this.clientLogin}/>
        <MySessions mySessions={this.state.mySessions} />
        <TrainerContainer mySessions={this.state.mySessions} trainers={this.state.trainers} addSession={this.addSession}/>
      </div>
    );

    

  }
}




