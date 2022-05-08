import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.js';


const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripcion: { task.description }
            </h3>
            <h4>
                level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED':'PENDING'}
            </h5>
        </div>
    );
};

//para asegurar el tipo de dato que va a recibir
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
