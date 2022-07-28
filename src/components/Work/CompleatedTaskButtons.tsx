import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { removeTask} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import DeleteIcon from '@mui/icons-material/Delete';

export interface ICompleatedTaskButtonsProps {
  task : ITaskCardProps
}

// export default class CompleatedTaskButtons extends React.Component<ICompleatedTaskButtonsProps> {
//   public render() {
//     return (
//       <></>
//     );
//   }
// }
export default function CompleatedTaskButtons (props: ICompleatedTaskButtonsProps) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}
          onClick={() => {dispatch(removeTask(props.task))}}
        >Delete</Button>
    </div>
  );
}
