"use client";

import { Grid } from '@mui/material';
import TaskList from '../components/TaskList';

const TaskIndex: React.FC = () => {
    const isAuthenticated: boolean = true;

    if (!isAuthenticated) {
        return <p>Please login...</p>;
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TaskList />
            </Grid>
        </Grid>
    );
};

export default TaskIndex;
