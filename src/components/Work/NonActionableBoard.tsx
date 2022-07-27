import * as React from 'react';
import Grid from '@mui/material/Grid';
import TaskCard, {ITaskCardProps} from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
import InNonActionableTaskButtons from './NonActionableTaskButtons';
import {taskStore} from '../Redux/taskStore';

export interface INonActionableBoardProps {
}

export interface INonActionableBoardState {
    TasksData : Array<ITaskCardProps>
}

export default class NonActionableBoard extends React.Component<INonActionableBoardProps, INonActionableBoardState> {
  constructor(props: INonActionableBoardProps) {
    super(props);

    this.state = { 
        TasksData  : taskStore.getState().taskUpdate.TasksData,
    }
    taskStore.subscribe(() => {  
        this.setState({
            TasksData: taskStore.getState().taskUpdate.TasksData,
        });
    });
  }

  public render() {
    return (
        <Grid container spacing={2}>
            {this.state.TasksData.filter((task)=> task.type === TaskTypeEnum.NONACTIONABLE)
                .map((task)=>{ return (
                    <Grid item md={6}>
                        <TaskCard {...task} TaskButtons={<InNonActionableTaskButtons task={task}/>}/>
                    </Grid>
                )})
            }
        </Grid>
    );
  }
}
