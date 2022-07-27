// import * as React from 'react';
// import Button from '@mui/material/Button';
// export interface IInNonActionableTaskButtonsProps {
// }

// export default class InNonActionableTaskButtons extends React.Component<IInNonActionableTaskButtonsProps> {
//   public render() {
//     return (
//       <div>
//           <Button size="small">move to Actionable</Button>
//       </div>
//     );
//   }
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import {add, changeTaskType} from '../Redux/taskSlice'
import { ITaskCardProps } from '../TaskCard/TaskCard';
import { TaskTypeEnum } from '../../Enums';
export interface IInNonActionableTaskButtonsProps {
    task : ITaskCardProps
}

export default function InNonActionableTaskButtons (props: IInNonActionableTaskButtonsProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button size="small"
          onClick={() => {dispatch(changeTaskType({task: props.task, newType: TaskTypeEnum.ACTIONABLE}))}}
        >Actionable</Button>
    </div>
  );
}
