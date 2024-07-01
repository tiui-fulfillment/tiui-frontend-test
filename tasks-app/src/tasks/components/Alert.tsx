import { Snackbar, Alert as MuiAlert, AlertColor } from '@mui/material';

interface AlertProps {
    message: string;
    isSuccess: boolean;
    open: boolean;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, isSuccess, open, onClose }) => {
    const severity: AlertColor = isSuccess ? 'success' : 'error';

    return (
        <Snackbar 
            open={open} 
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <MuiAlert variant="filled" onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

export default Alert;
