import React from 'react';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import HourglassFullRoundedIcon from '@mui/icons-material/HourglassFullRounded';
import { TaskPriorityEnum } from '../../Enums';
export default function TaskPriorityIcon(props: {priority : TaskPriorityEnum | undefined} ) {
    let icon = <HourglassFullRoundedIcon fontSize="large" color='primary' />;
    switch (props.priority) {
        case TaskPriorityEnum.LOW:
            icon = <HourglassFullRoundedIcon fontSize="large" color='primary' />
        break;
        case TaskPriorityEnum.MEDIUM:
            icon = <HourglassBottomRoundedIcon fontSize="large" color='secondary'/>
        break;
        case TaskPriorityEnum.HIGH:
            icon = <HourglassEmptyRoundedIcon fontSize="large" color='error' />
        break;
    }
    return(icon);
}
