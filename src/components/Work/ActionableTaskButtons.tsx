import * as React from 'react';
import Button from '@mui/material/Button';
import {useDispatch } from 'react-redux'
import {changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
import SendIcon from '@mui/icons-material/Send';

export interface IActionableTaskButtonsProps {
    task : ITaskCardProps
}

export default function ActionableTaskButtons (props: IActionableTaskButtonsProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button size="small" endIcon={<SendIcon />} variant="outlined" color="primary"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.INPROGRESS}))}}
        >InProgress</Button>
    </div>
  );
}
