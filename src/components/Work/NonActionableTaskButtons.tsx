import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
import SendIcon from '@mui/icons-material/Send';
export interface IInNonActionableTaskButtonsProps {
    task : ITaskCardProps
}

export default function InNonActionableTaskButtons (props: IInNonActionableTaskButtonsProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button size="small" startIcon={<SendIcon />} variant="outlined" color="primary"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.ACTIONABLE}))}}
        >Actionable</Button>
    </div>
  );
}
