import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Greetingf = (props) => {

    // const [variable, metodo para iniciarla] = useState(valor incial);
    const [age, setage] = useState(47);

    const birthday =()=>{
        //actualizar el State
        setage(age + 1)

    }
    
    
    return (
        <div>
            <h1>
                Hola, soy {props.name}!, estoy en el componente funcional!
            </h1>
            <h2>Tengo {age} años</h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>

    );
};


Greetingf.propTypes = {
    name: PropTypes.string
};


export default Greetingf;
