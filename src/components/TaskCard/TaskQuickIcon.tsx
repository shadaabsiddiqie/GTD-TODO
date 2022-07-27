import * as React from 'react';
import SpeedIcon from '@mui/icons-material/Speed';

export default function TaskQuickIcon(props: {quick : boolean | undefined}){
    let icon = <SpeedIcon fontSize="large" color='primary' aria-label="Sample Icon"/>;
    if (!props.quick) icon = <></>;
    return(icon);
}
