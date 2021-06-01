import React, { Component } from "react";
import TrainerCard from "./TrainerCard"



class MySessions extends Component {


    render() {
        return (
            <div>
           {this.props.mySessions.map(sessions => { return <TrainerCard trainer={sessions} key={sessions.id} />})}
            </div>
        )
    }




}




export default MySessions