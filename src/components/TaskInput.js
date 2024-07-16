// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';


// TaskInput component for adding a new task
const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();


    // Function to handle adding a new task
    const handleAddTask = () => {
        if (task) {
            dispatch(addTask({ id: Date.now(), task }));
            setTask(''); // Clear the input field
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
