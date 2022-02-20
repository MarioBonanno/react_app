import React from 'react';
import ReactDOM  from 'react-dom';

class App extends React.Component {

    constructor(props, P) {
        super(props);

        this.state = {lat: null, error: ''};

        window.navigator.geolocation.getCurrentPosition (
            position => {
                this.setState( {lat: position.coords.latitude} );
            },
            err => { 
                this.setState({error: err.message});
            }
        );
    }

    render() {
        return(
            <div className="content"> 
                Latitude {this.state.lat};
                Error {this.state.error}            
            </div>
            
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));