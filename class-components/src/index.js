import React from 'react';
import ReactDOM  from 'react-dom';

class App extends React.Component {

    constructor(props, P) {
        super(props);

        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState( 
                        {lat: position.coords.latitude}
                    );
            },
            err => console.log(err)
        );
    }

    render() {
        return(
            <div className="content">{this.state.lat}</div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));