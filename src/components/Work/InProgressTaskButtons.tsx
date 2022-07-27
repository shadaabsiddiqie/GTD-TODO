import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import {add, changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
export interface IInProgressTaskButtonsProps {
    task : ITaskCardProps
}
export default function InProgressTaskButtons (props: IInProgressTaskButtonsProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button size="small"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.COMPLEATED}))}}
        >Compleated</Button>
    </div>
  );
}
