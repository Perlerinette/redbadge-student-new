import React, { Component } from 'react';

class PropsMappingExample extends Component {
    render() { 
        const visitedPlaces = () => 
            this.props.visited.map((place) => <li>{place}</li>);
        return ( 
            <>
                <h2>Places I have been</h2>
                <ul>
                    {visitedPlaces()}
                </ul>
            </>
         )
    }
}
 
export default PropsMappingExample;

// class PropsMapping extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }
 
// export default PropsMapping;