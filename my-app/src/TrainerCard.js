import React, { Component } from "react";


class TrainerCard extends Component {

    render() {
        return (
            <div>
                <h2>Name: {this.props.trainer.name}</h2>
                <img alt="Trainer" src={this.props.trainer.image}/>
                <h3>Rating: {this.props.trainer.rating}</h3>
                <button>Book a session</button>
            </div>
        )
    }




}




export default TrainerCard