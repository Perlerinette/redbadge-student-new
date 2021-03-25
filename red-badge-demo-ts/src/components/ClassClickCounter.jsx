// Create a class version of the Functional Component

import React, { Component } from 'react';
import { Button, Container } from "reactstrap";

class ClassClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countValue: this.props.initialValue 
        }
    }

    handleClick = () => {
        this.state.countValue > 0 ? this.setState({
            countValue:  this.state.countValue - 1}) : this.setState({
                countValue: 0 });
    }

    render() { 
        return (
            <Container>
                <p>
                    The total clicks left are {this.state.countValue}{" "}
                    <Button color="warning" onClick={this.handleClick}> Click Me From Class</Button>
                </p>
            </Container>
          );
    }
}
 
export default ClassClickCounter;