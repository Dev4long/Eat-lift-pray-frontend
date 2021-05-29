import React, { Component } from "react";


class SessionForm extends Component {

    render() {
        return (
            <div className="container">
          <form className="add-session-form">
            <h3>Book a session!</h3>
            <input 
                type="text" 
                name="name" 
                placeholder="Enter a trainers name..." 
                className="input-text"
            />
            <br/>
            <br/>
            <input 
                type="submit" 
                name="submit" 
                value="Book a new Session" 
                className="submit"
            />
          </form>
        </div>
        )
    }




}




export default SessionForm