import * as React from 'react';
import Button from '@mui/material/Button';
import {useDispatch } from 'react-redux'
import { changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WorkOffIcon from '@mui/icons-material/WorkOff';
export interface IBrainDumpTaskButtonsProps {
    task : ITaskCardProps
}

export default function BrainDumpTaskButtons (props: IBrainDumpTaskButtonsProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button size="small" endIcon={<WorkOutlineIcon />} variant="text" color="primary"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.ACTIONABLE}))}}
        >Work</Button>

      <Button size="small" endIcon={<WorkOffIcon />} variant="text" color="primary"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.NONACTIONABLE}))}}
        >Adict</Button>
    </div>
  );
}
