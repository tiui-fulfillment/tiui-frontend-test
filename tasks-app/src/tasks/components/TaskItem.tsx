"use client";

import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, IconButton, Menu, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Task } from '../types/Task';

interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (taskId: string) => void;
    onEnd: (taskId: string, isDone: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onEnd }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isDone, setIsDone] = useState<boolean>(task.isDone);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        onEdit(task);
        handleMenuClose();
    };

    const handleDelete = () => {
        onDelete(task.id);
        handleMenuClose();
    };

    const handleCheckboxChange = () => {
        setIsDone(!isDone);
        onEnd(task.id, !isDone);
    };

    const style = {
        whiteSpace: 'nowrap' as const,
        overflow: 'hidden' as const,
        textOverflow: 'ellipsis' as const,
    };

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <FormControlLabel
                            control={<Checkbox checked={isDone} onChange={handleCheckboxChange} />}
                            label={
                                <Typography variant="h6" sx={style}>
                                    {task.name}
                                </Typography>
                            }
                        />
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleMenuClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleEdit}>Edit</MenuItem>
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
                <Typography variant="body2" sx={style}>
                    {task.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TaskItem;
