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
 { name: 'Yoshi', status: false,  id: 5 },
 { name: 'Crystal', status: true, id: 6 }
    ]
  }
  ChangeTaskState = (e) => {
        // console.log('in parent',task_id)
        e.preventDefault()
        var task_id = e.target.dataset.id
        var taskCopy = this.state.tasks;
        var i = 0;
        console.log(task_id,e.target.dataset.newstatus)
        console.log(taskCopy)
        for (i=0;i<taskCopy.length;i++){
            if (taskCopy[i].id == task_id) {
                taskCopy[i].status = (e.target.dataset.newstatus === 'true')
                break;
            }

        }
        console.log(taskCopy[i])
        this.setState({
            "tasks": taskCopy
            }
        )

  }
  render() {

    return (

        <div className="App">
            {/*<img src = { TaskImage }/>*/}
          <h1 className="main-heading"> My Tasks </h1>

          <ListTask  status={true} tasks={this.state.tasks} ChangeTaskState = { this.ChangeTaskState }/>
          {/*<ListTask  status={true} tasks={this.state.tasks} ChangeTaskState = { this.ChangeTaskState }/>*/}

          <style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
</style>
        </div>
    );
  }
}

export default App;
