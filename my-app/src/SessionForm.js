import React, { Component } from "react";



const workoutDescription = ["cardio", "weight training", "calisthenic training", "strength training"]


class SessionForm extends Component {

    render() {
        return (
            <div className="container">
          <form className="add-session-form">
            <h3>Book a session!</h3>
            <input
            type="text" 
            name="name" 
            placeholder="Enter you name here..." 
            className="input-text"
            />
            <label>
         <strong>Workout type:</strong>
         <select>
          <option value="all">Select...</option>
          <option value="cardio">Cardio</option>
          <option value="weight training">Weight training</option>
          <option value="calisthenic training">Calisthenic training</option>
          <option value="strength training">Strength training</option>
          </select>
            </label>
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