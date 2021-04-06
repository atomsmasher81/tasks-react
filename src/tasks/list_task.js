import {Component} from "react";
import './tasks.css'

const ListTask = ({ tasks,ChangeTaskState }) => {
    const  TaskList = tasks.map(task =>{
        return (
            <form key={task.id} className={ task.status ? ("task task-done") : ("task")  } >
                <div className="task-data">
                    {/*<div>num : { task.id }</div>*/}
                    <div className="task-data-value">{ task.name }</div>

                </div>
                <div className="task-option">
                    {task.status ? (
                            <button className="button-done" data-id={task.id} data-newstatus = {false} onClick={ChangeTaskState}> Not Done </button>
                          ) : (
                            <button className="button-not-done" data-id={task.id} data-newstatus = {true} onClick={ChangeTaskState}> Done</button>
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