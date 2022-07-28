import * as React from 'react';
import Button from '@mui/material/Button';
import {  useDispatch } from 'react-redux'
import {add} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
export interface ITaskAddModalSubmitButtonProps {
    task : ITaskCardProps
}

export default function TaskAddModalSubmitButton (props: ITaskAddModalSubmitButtonProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button size="small"
          onClick={() => {dispatch(add(props.task))}}
        >In Progress</Button>
    </div>
  );
}
