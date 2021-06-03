import React, { Component } from "react";
import SessionCard from "./SessionCard"



class MySessions extends Component {


    render() {
    
        return (
            <div>
                {/* <h2>Your session details</h2> */}
            {this.props.mySessions.length <= 0 ? <h2>No current sessions</h2> : <h2>Your session details</h2>}
           {this.props.mySessions.map(sessions => { return <SessionCard sessions={sessions} key={sessions.id} deleteSession={this.props.deleteSession} clientObject={this.props.clientObject} updateSession={this.props.updateSession}/>})}
            </div>
        )
    }




}




export default MySessions