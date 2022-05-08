import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);

        this.state = {
            age : 47
        }

    }
    render() {
        return (
            <div>
            <h1>
                Hola, soy {this.props.name}!, estoy desde el método Clase
            </h1>
            <h2>Tengo {this.state.age} años</h2>
            <div>
                <button onClick={this.birthday}>
                  Cumplir años  
                </button>
            </div>
            </div>
        );
    }
    birthday = () => {
        this.setState((prevState)=>(
            {age: prevState.age +1}
        ))

    }
}


Greeting.propTypes = {
    name: PropTypes.string,

};


export default Greeting;
