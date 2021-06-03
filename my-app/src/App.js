import React from 'react';
import './App.css';
import TrainerContainer from './TrainerContainer'
import MySessions from './MySessions'
import LoginForm from './LoginForm'


export default class App extends React.Component{
   
  state = {
    trainers: [],
    mySessions: [],
    clientObject: []
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
      let newSessionArray = [...this.state.mySessions,sessionObj]
      this.setState({mySessions: newSessionArray})
      console.log(newSessionArray)
    }

    clientLogin = (clientObj) => {
    this.setState({mySessions: clientObj.sessions})
    this.setState({clientObject: clientObj})
    console.log(this.state.clientObject)
    }
   



  render() {
    console.log(this.state.mySessions)
    
   
    
    return (
      <div>
        <h1>Eat, Lift, Pray</h1>
        <LoginForm clientLogin={this.clientLogin}/>
        <MySessions mySessions={this.state.mySessions} />
        <TrainerContainer mySessions={this.state.mySessions} trainers={this.state.trainers} addSession={this.addSession} clientObject={this.state.clientObject}/>
      </div>
    );

    

  }
}




