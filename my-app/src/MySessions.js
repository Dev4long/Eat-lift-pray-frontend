import React, { Component } from "react";
import SessionCard from "./SessionCard"



class MySessions extends Component {


    render() {
        // console.log("mySession",this.props.mySessions.sessions)
        return (
            <div>
                <h2>Your session details</h2>
           {this.props.mySessions.map(sessions => { return <SessionCard sessions={sessions} key={sessions.id} />})}
            </div>
        )
    }




}




export default MySessions