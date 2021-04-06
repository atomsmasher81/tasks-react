import './App.css';
import ListTask from "./tasks/list_task";
import {Component} from "react/cjs/react.production.min";
import TaskImage from './assets/task_image.jpeg';
class App extends Component {
  state = {
    "tasks": [
        { name: 'pick up groceries', status: true,  id: 1 },
 { name: 'go to the gym', status: false,  id: 2 },
 { name: 'meditation', status: false,  id: 3 },
 { name: 'learn react', status: false,  id: 4 },
 // { name: 'Yoshi', status: false,  id: 5 },
 // { name: 'Crystal', status: true, id: 6 }
    ]
  }
  ChangeTaskState = (d) => {
        console.log('in parent')
        console.log(d.target)
        console.log(d.target.key)

  }
  render() {

    return (

        <div className="App">
            {/*<img src = { TaskImage }/>*/}
          <h1 className="main-heading"> My Tasks </h1>

          <ListTask tasks={this.state.tasks} ChangeTaskState = { this.ChangeTaskState }/>

          <style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
</style>
        </div>
    );
  }
}

export default App;
