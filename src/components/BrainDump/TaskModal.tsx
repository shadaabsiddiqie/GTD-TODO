import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FormGroup, FormControl, 
    FormLabel , TextField, 
    MenuItem, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskPriorityEnum } from '../../Enums';
import {add} from '../Redux/taskSlice'
import { useDispatch } from 'react-redux'
import TaskAddModalSubmitButton from './TaskAddModalSubmitButton';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export interface IAddTaskModalState {
    open: boolean,
    taskData: ITaskCardProps,

}


export interface IAddTaskModalProps {
    open: boolean,
    taskData: ITaskCardProps,
    handleClose: Function,
}

export default class AddTaskModal extends React.Component<IAddTaskModalProps, IAddTaskModalState> {
    constructor(props: IAddTaskModalProps) {
        super(props);
        this.state = {
            open: this.props.open,
            taskData: this.props.taskData,
        }
    }
    handleOpen = () => this.setState({open: true});
    handleClose = () => {
        this.setState({open: false})
        this.props.handleClose();
    };  
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            taskData: {
                ...this.state.taskData,
                [name]: value,
            }
        });
    }
    
    componentDidUpdate(pProps:IAddTaskModalProps, pState:IAddTaskModalState){
        if (pProps.open !== this.props.open && this.props.open !== pState.open){
            this.setState({open: this.props.open});
        }
    };
    handleMouse = (event: React.MouseEvent<HTMLElement>, value: boolean) => {
        this.setState({
            taskData: {
                ...this.state.taskData,
                quick: value,
            }
        });
    }
    handleSubmit = () => {
        const dispatch = useDispatch();
        dispatch(add(this.state.taskData))
        console.log(this.state.taskData);
        this.handleClose();
    }
    public render() {
        return (
        <>
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">   
                <Box sx={style}>
                    <FormGroup>
                        <FormLabel>
                            <h2>Task</h2>
                        </FormLabel>
                        <FormControl>
                            <TextField
                                    label={'Title'}
                                    placeholder={'Title'}
                                    name = {'title'}
                                    value={this.state.taskData.title}
                                    onChange={this.handleChange}
                                    required
                                    sx={{marginBottom:2}}
                            />
                            <TextField
                                    label={'Description'}
                                    placeholder={'Description'}
                                    name = {'description'}
                                    value={this.state.taskData.description}
                                    onChange={this.handleChange}
                                    required
                                    sx={{marginBottom:2}}
                            />
                            <div>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Priority"
                                    size = 'small'
                                    name='priority'
                                    value={this.state.taskData.priority}
                                    onChange={this.handleChange}
                                    sx={{marginRight:2}}
                                    helperText="Select task priority"
                                >
                                    <MenuItem value={TaskPriorityEnum.LOW}>Low</MenuItem>
                                    <MenuItem value={TaskPriorityEnum.MEDIUM}>Medium</MenuItem>
                                    <MenuItem value={TaskPriorityEnum.HIGH}>High</MenuItem>
                                </TextField>
                                <ToggleButtonGroup
                                    color="primary"
                                    value= {this.state.taskData.quick}
                                    exclusive
                                    size= 'small'
                                    onChange={this.handleMouse}
                                    >
                                    <ToggleButton value= {true}>Quick Task</ToggleButton>
                                    <ToggleButton value={false}>Long Task</ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </FormControl>
                        <Box textAlign='center'>
                            {/* <Fab color="primary" aria-label="add" onClick={this.handleSubmit}>
                            <AddIcon />
                            </Fab>     */}
                            <TaskAddModalSubmitButton task={this.state.taskData}/>
                        </Box>
                    </FormGroup>
                </Box>
                
            </Modal>
        </>
        );
    }
}
