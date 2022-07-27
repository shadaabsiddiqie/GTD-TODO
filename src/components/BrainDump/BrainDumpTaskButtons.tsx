import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import {add, changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
export interface IBrainDumpTaskButtonsProps {
    task : ITaskCardProps
}

export default function BrainDumpTaskButtons (props: IBrainDumpTaskButtonsProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button size="small"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.ACTIONABLE}))}}
        >Actionable</Button>
        
      <Button size="small"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.NONACTIONABLE}))}}
        >NonActionable</Button>
    </div>
  );
}
