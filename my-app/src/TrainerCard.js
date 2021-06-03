import React, { Component } from "react";
import SessionForm from './SessionForm';
import { Grid, Button, Segment, Header, Container } from 'semantic-ui-react'


class TrainerCard extends Component {

    state= {
        sessionForm: false,
    }

    handleSessionForm = () => {
        this.setState({
          sessionForm : !this.state.sessionForm
        })
      }

    render() {
        return (
            <div className="trainerCard">
                
                <h2>Name: {this.props.trainer.name}</h2>
                <img alt="Trainer" src={this.props.trainer.image}/>
                <h3>Rating: {this.props.trainer.rating}</h3>
                <button onClick={() => this.handleSessionForm()}>{`Book a session with ${this.props.trainer.name}`}</button>
                {this.state.sessionForm ? <SessionForm trainer={this.props.trainer} addSession={this.props.addSession} mySessions={this.props.mySessions} clientObject={this.props.clientObject}/>:null}
                
            </div>
        )
    }




}




export default TrainerCard