import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx*/}
        {/* <Greeting name = "Nairo"></Greeting> */}
        {/* componente de listado de tareas */}
        {/* <Greetingf name='Nairo'></Greetingf> */}
        {/* componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        </header>
    </div>
  );
}

export default App;
