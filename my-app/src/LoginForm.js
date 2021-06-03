import React, { Component } from "react";




class LoginForm extends Component {

    state = {
        loginName:"",
        registerName:"",
        registerAge: null
    }

    handleRegister = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/client_Register', {
          method: "POST",
          headers: {
            "Content-type": "Application/json"
          },
          body: JSON.stringify({
           name: this.state.registerName,
           age: this.state.registerAge
          })
     })
          .then(
             this.setState({registerName:""}),
             this.setState({registerAge:""}),
             alert("successfully registered ")
          )


    }

    handleLogin = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:9292/clients')
        .then(res => res.json())
        .then(clients =>  
           (clients.find(client =>  client.name === this.state.loginName ? this.props.clientLogin(client) : null 
                )))
            
    }
    
   
 

    render() {
       console.log(this.props.clientObject)
        
     return(
        <div>
        <form onSubmit={this.handleLogin}>
        <input onChange={(e)=> this.setState({loginName: e.target.value})}
        placeholder="enter your name"
        />
        <input 
                type="submit" 
                name="submit" 
                value="Login" 
                className="submit"
            />
        </form>
        <form onSubmit={this.handleRegister}>
        <input onChange={(e)=> this.setState({registerName: e.target.value})}
        placeholder="enter your name"
        />
        <input onChange={(e)=> this.setState({registerAge: e.target.value})}
        placeholder="enter your age"
        />
        <input 
                type="submit" 
                name="submit" 
                value="Register as new client" 
                className="submit"
            />
        </form>
        <br></br>
        </div>
     )
     
    }

}




export default LoginForm