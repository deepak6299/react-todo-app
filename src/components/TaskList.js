// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/actions';


// TaskList component to display the list of tasks
const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

        // Function to handle deleting a task
    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };


     // Function to handle editing a task
    const handleEditTask = (id) => {
        const newTask = prompt('Edit task:', tasks.find((task) => task.id === id).task);
        if (newTask) {
            dispatch(editTask({ id, task: newTask }));
        }
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => handleEditTask(task.id)}>Edit</button>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
