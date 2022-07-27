import * as React from 'react';
import TaskCard, {ITaskCardProps} from '../TaskCard/TaskCard';
import BrainDumpTaskButtons from './BrainDumpTaskButtons';
import { Container, Stack, IconButton, Box, Fab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import AddTaskModal from './TaskModal';
import { TaskPriorityEnum, TaskTypeEnum } from '../../Enums';
import {taskStore} from '../Redux/taskStore';
export interface IBrainDumpBoardProps {
}

export interface IBrainDumpBoardState {
    TasksData : Array<ITaskCardProps>,
    ModalVisible : boolean,
}

export default class BrainDumpBoard extends React.Component<IBrainDumpBoardProps, IBrainDumpBoardState> {
  constructor(props: IBrainDumpBoardProps) {
    super(props);
    this.state = { 
        TasksData  : taskStore.getState().taskUpdate.TasksData,
        ModalVisible : false
    }
    taskStore.subscribe(() => {  
        this.setState({
            TasksData: taskStore.getState().taskUpdate.TasksData,
        });
    });
  }
  brainDumpCards = ()=>{
    return <>
        {
            this.state.TasksData
                .filter((t) => t.type === TaskTypeEnum.BRAINDUMP)
                .map((t)=>{ return (
                <Grid item md={4}>
                    <TaskCard {...t} TaskButtons={<BrainDumpTaskButtons task={t}/>}/>
                </Grid>
            )})
        }
    </>
  }
  emptyTaskData = ()=>{
    return {
        id: 6,
        title: '',
        description: '',
        priority: TaskPriorityEnum.LOW,
        quick: false,
        type: TaskTypeEnum.BRAINDUMP,
    }
  }
  public render() {
    return (
        <>
            <Grid container spacing={2}>
                {this.brainDumpCards()}
            </Grid>
            <Box textAlign='center' sx={{marginTop: 2}}>
                <Fab color="primary" aria-label="add">
                <AddIcon />
                </Fab>    
            </Box>
            <Box textAlign='center' sx={{bottom: 5, right: 5, position: "absolute"}}>
                <Fab variant="extended">
                    <NavigationIcon />
                </Fab>
            </Box>
            <AddTaskModal taskData={this.emptyTaskData()}/>
        </>
    );
  }
}
