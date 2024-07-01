"use client";

import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

interface TaskFabAddProps {
    onClick?: () => void;
}

const TaskFabAdd: React.FC<TaskFabAddProps> = ({ onClick }) => {

    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };

    return (
        <Fab color="primary" aria-label="add" sx={style} onClick={onClick}>
            <Add />
        </Fab>
    );
};

export default TaskFabAdd;
