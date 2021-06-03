import React, { Component } from "react";
import TrainerCard from "./TrainerCard";


class TrainerContainer extends Component {


    render() {
        return (
            <div className="row">
                {this.props.trainers.map(trainer => { return <TrainerCard trainer={trainer} key={trainer.id} addSession={this.props.addSession} mySessions={this.props.mySessions} clientObject={this.props.clientObject}/>})}
            </div>
        )
    }




}




export default TrainerContainer