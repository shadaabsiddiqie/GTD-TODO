import * as React from 'react';
import TaskCard, {ITaskCardProps} from '../TaskCard/TaskCard';
// import BrainDumpTaskButtons from './BrainDumpTaskButtons';
import { Grid } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import NavigationIcon from '@mui/icons-material/Navigation';
// import AddTaskModal from './AddTaskModal';
import { TaskTypeEnum } from '../../Enums';
import ActionableTaskButtons from './ActionableTaskButtons';
import CompleatedTaskButtons from './CompleatedTaskButtons';
import InProgressTaskButtons from './InProgressTaskButtons';
import {taskStore} from '../Redux/taskStore';
export interface IWorkBoardProps {
}

export interface IWorkBoardState {
    TasksData : Array<ITaskCardProps>
}


export default class WorkBoard extends React.Component<IWorkBoardProps, IWorkBoardState> {
  constructor(props: IWorkBoardProps) {
    super(props);
    this.state = { 
        TasksData  :  taskStore.getState().taskUpdate.TasksData,
    }
    taskStore.subscribe(() => {  
        this.setState({
            TasksData: taskStore.getState().taskUpdate.TasksData,
        });
    });
  }

buttonsOfType = (taskSent: ITaskCardProps)=>{
    switch (taskSent.type) {
        case TaskTypeEnum.ACTIONABLE:
            return <ActionableTaskButtons task={taskSent}/>;
        case TaskTypeEnum.INPROGRESS:
            return <InProgressTaskButtons task={taskSent}/>;
        case TaskTypeEnum.COMPLEATED:
            return <CompleatedTaskButtons task={taskSent}/>;
        default:
            return <></>;
    }
}  
tasksOfType = (type: TaskTypeEnum | undefined)=>{
    return(
        <>
            {this.state.TasksData.filter((task)=> task.type === type)
                .map((task)=>{ return (
                    <TaskCard {...task} TaskButtons={this.buttonsOfType(task)}/>
                )})
            }    
        </>
    )}
  public render() {
    return (<Grid container spacing={2}>
                <Grid item md={4}>
                    <h2>ACTIONABLE</h2>
                    {this.tasksOfType(TaskTypeEnum.ACTIONABLE)}       
                </Grid>
                <Grid item md={4}>
                    <h2>INPROGRESS</h2>
                    {this.tasksOfType(TaskTypeEnum.INPROGRESS)}
                </Grid>
                <Grid item md={4}>
                    <h2>COMPLETED</h2>
                    {this.tasksOfType(TaskTypeEnum.COMPLEATED)}
                </Grid>
            </Grid>
    );
  }
}
