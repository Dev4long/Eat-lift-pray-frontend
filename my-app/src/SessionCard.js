import React, { Component } from "react";
import UpdateSession from "./UpdateSession";

class SessionCard extends Component {

    
   
   
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
            <div>
          
          <div>
          Workout Description: {this.props.sessions.workout_description},
          </div>
          <br></br>
          <div>
          Date: {this.props.sessions.date.slice(0, 10)},
          </div>
          <br></br>
          <div>
          Time: {this.props.sessions.time},
          </div>
          <br></br>
          <div>
          Price: {this.props.sessions.price},
          </div>
          <br></br>
          <div>
          Trainer: {this.props.sessions.trainer.name},
          </div>
          <br></br>
          <button onClick={() => this.handleSessionForm()}>Need to make changes? Update your session</button>
          { this.state.sessionForm ? <UpdateSession clientObject={this.props.clientObject} updateSession={this.props.updateSession} sessions={this.props.sessions}/>:null}
          <br></br>
          <img alt="Trainer" src={this.props.sessions.trainer.image}/>,
          <button onClick={() => this.props.deleteSession(this.props.sessions.id)}>Delete this session</button>
            </div>
        )
    }
    




}




export default SessionCard