// src/store/reducers.js
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';

// Initial state
const initialState = {
    tasks: [],
};

// Reducer function to handle task-related actions
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        default:
            return state;
    }
};

export default taskReducer;
