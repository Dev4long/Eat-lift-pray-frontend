import React, { Component } from "react";
import TrainerCard from "./TrainerCard";


class TrainerContainer extends Component {


    render() {
        return (
            <div className="row">
                {this.props.trainers.map(trainer => { return <TrainerCard trainer={trainer} key={trainer.id} />})}
            </div>
        )
    }




}




export default TrainerContainer