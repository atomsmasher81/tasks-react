import {Component} from "react";
import './tasks.css'

const ListTask = ({ tasks,ChangeTaskState }) => {
    const HandleTaskDoneButton = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(e.target)
        ChangeTaskState(e)
    }
    const  TaskList = tasks.map(task =>{
        return (
            <form key={task.id} className={ task.status ? ("task task-done") : ("task")  } >
                <div className="task-data">
                    <div>num : { task.id }</div>
                    <div>{ task.name }</div>

                </div>
                <div className="task-option">
                    {task.status ? (
                            <button className="button-done"  onClick={HandleTaskDoneButton}> Not Done </button>
                          ) : (
                            <button className="button-not-done" onClick={HandleTaskDoneButton}> Done</button>
                          )
                    }
                </div>
                </form>
        )
    })
    return(
        <div className="list-elements">
            { TaskList }
        </div>
    )

}

export default ListTask