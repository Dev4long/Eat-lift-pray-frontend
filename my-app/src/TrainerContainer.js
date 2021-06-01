import React, { Component } from "react";
import TrainerCard from "./TrainerCard";


class TrainerContainer extends Component {


    render() {
        return (
            <div className="row">
                {this.props.trainers.map(trainer => { return <TrainerCard trainer={trainer} key={trainer.id} addSession={this.props.addSession}/>})}
            </div>
        )
    }




}




export default TrainerContainer