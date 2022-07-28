import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TaskPriorityEnum, TaskTypeEnum } from "../../Enums";
import TaskPriorityIcon from "./TaskPriorityIcon";
import TaskQuickIcon from "./TaskQuickIcon";
export interface ITaskCardProps {
  id: number;
  title: String;
  description: String;
  priority?: TaskPriorityEnum | undefined;
  type?: TaskTypeEnum;
  progress?: number;
  quick?: boolean;
  creationTime?: Date;
  lastModifiedTime?: Date;
  TaskButtons?: React.ReactElement;
}

export default class TaskCard extends React.Component<ITaskCardProps> {
  public render() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.description}
          </Typography>
          <Typography sx={{ mt: 1, mb: -3 }}>
            <Grid container spacing={2}>
              <Grid item md={8} xs={6}></Grid>
              {/* <Grid item md={2} xs={3}>
                <TaskCircularProgress value={this.props.progress} />
              </Grid> */}
              <Grid item md={2} xs={3}>
                <TaskQuickIcon quick={this.props.quick} />
              </Grid>
              <Grid item md={2} xs={3}>
                <TaskPriorityIcon priority={this.props.priority} />
              </Grid>
            </Grid>
          </Typography>
        </CardContent>

        <CardActions>{this.props.TaskButtons}</CardActions>
      </Card>
    );
  }
}
