"use client";

import { Box, Drawer } from '@mui/material';
import TaskForm from './TaskForm';
import { Task } from '../types/Task';

interface TaskEditProps {
    open: boolean;
    onClose: () => void;
    task: Task | null;
    onSave: (task: Task) => void;
}

const TaskEdit: React.FC<TaskEditProps> = ({ open, onClose, task, onSave }) => {
    const handleSave = (updatedTask: Task) => {
        onSave(updatedTask);
        onClose();
    };

    return (
        <Drawer open={open} onClose={onClose}>
            <Box
                role="presentation"
            >
                {task && <TaskForm isNew={false} onSave={handleSave} initialData={task} />}
            </Box>
        </Drawer>
    );
};

export default TaskEdit;
