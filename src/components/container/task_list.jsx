import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task';
import TaskComponent from '../pure/task';

//Creamos un componente funcional
const TaskListComponent = () => {

const changeState = (id) => {
    console.log('TODO: Cambiar el estado de una tarea')
}

    //creamos una nueva tarea y llenamos la info del constructor como ejemplo
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
                {/* TODO: Aplicar un For/Map para renderizar una lista */}
                <TaskComponent task={defaultTask}></TaskComponent>

            </div>
        </div>
    );
};


export default TaskListComponent;
