import React, { Component } from "react";
import TrainerCard from "./TrainerCard";
import { Grid, Button, Segment, Header, Container } from 'semantic-ui-react'


class TrainerContainer extends Component {


    render() {
        return (
            <div className="row">
                <Container textAlign='center'>
                <Grid padded = "horizontally" inverted columns={3}>
                    
                {this.props.trainers.map(trainer => { return <TrainerCard trainer={trainer} key={trainer.id} addSession={this.props.addSession} mySessions={this.props.mySessions} clientObject={this.props.clientObject}/>})}
                    
                </Grid>
                </Container>
            </div>
        )
    }




}




export default TrainerContainer