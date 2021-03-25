import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props); // good practice to keep 'props' inside the super method()
        this.state = { currentTemp: '78', location: "Indiana" };
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(){
    //     this.setState({currentTemp: "48"});
    // }

    handleClick = () => {
        this.setState({currentTemp: "25"});
    }

    render() { 
        return (  
            <>
                Hello the current temps is {this.state.currentTemp} - {" "}{this.state.location}
                <button onClick={this.handleClick}>Change Temp</button>
            </>
        );
    }
}
 
export default StateExample;