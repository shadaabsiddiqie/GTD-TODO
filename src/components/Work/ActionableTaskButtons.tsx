import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import {add, changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
export interface IActionableTaskButtonsProps {
    task : ITaskCardProps
}

export default function ActionableTaskButtons (props: IActionableTaskButtonsProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button size="small"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.INPROGRESS}))}}
        >In Progress</Button>
    </div>
  );
}
