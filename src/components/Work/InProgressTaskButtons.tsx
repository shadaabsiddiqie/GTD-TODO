import * as React from 'react';
import Button from '@mui/material/Button';
import {useDispatch } from 'react-redux'
import { changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
import SendIcon from '@mui/icons-material/Send';
export interface IInProgressTaskButtonsProps {
    task : ITaskCardProps
}
export default function InProgressTaskButtons (props: IInProgressTaskButtonsProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button size="small" endIcon={<SendIcon />} variant="outlined" color="primary"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.COMPLEATED}))}}
        >Compleated</Button>
    </div>
  );
}
