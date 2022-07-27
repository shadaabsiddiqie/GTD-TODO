import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITaskCardProps } from '../TaskCard/TaskCard'
import { TaskTypeEnum } from '../../Enums'

export interface TaskState {
    TasksData : Array<ITaskCardProps>,
}

export interface ITaskButtonsEditState {
    newType : TaskTypeEnum,
    task : ITaskCardProps
}
const initialState: TaskState = {
    TasksData : JSON.parse(localStorage.getItem('TasksData') || '[]'),
}

export const taskSlice = createSlice({
    name: 'task Update',
    initialState,
    reducers: {
        changeTaskType: (state, action : PayloadAction<ITaskButtonsEditState>) => {
            let taskIndex = state.TasksData
                .findIndex(task=> task.id === action.payload.task.id);
            state.TasksData[taskIndex].type = action.payload.newType;
            localStorage.setItem('TasksData',JSON.stringify(state.TasksData));
        },
        add: (state, action: PayloadAction<ITaskCardProps>) => {
            let newTask = action.payload;
            newTask.id = state.TasksData.length + 1;
            state.TasksData.push(newTask)
            localStorage.setItem('TasksData',JSON.stringify(state.TasksData));
        },
    },
})

export const task_data = (state: TaskState) => state.TasksData;
export const { changeTaskType, add } = taskSlice.actions;
export default taskSlice.reducer;