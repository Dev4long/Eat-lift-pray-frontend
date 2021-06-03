import React from 'react';
import { Link } from 'react-router-dom'



export default class Opening extends React.Component {
    render(){
        return (
            <div>
                <Link to= "/trainers">
                <button>Trainers</button>
                </Link>
                <Link to= "/loginForm">
                <button>LoginForm</button>
                </Link>
                {/* <Link to= "/sorter">
                <button>LoginForm</button>
                </Link> */}
            </div>
        )
    }
}