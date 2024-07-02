//Redux
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, update, del } from '../utils/todoListReducer';

//Material
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const TaskAdd = React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
      openModal(element) {
        handleClickOpen(element);
      },
      deleteModal(element) {
        handleClickOpen(element, true);
      }
    }));
    
    const data = useSelector((state) => state.todolist);
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [isItemAction, setItemAction] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [task, setTask] = React.useState('');
    const [taskItem, setTaskItem] = React.useState('');
    const [action, setAction] = React.useState('Agregar Tarea');
  
    const handleClickOpen = (element, isDelete=false) => {
      if(Object.keys(element).length==3){
        setTask(element.task);
        setTaskItem(element);
        setAction("Editar Tarea");
      }else{
        setTask('');
        setAction("Agregar Tarea");
      }
      if(isDelete){
        setItemAction(false);
      }
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setItemAction(true);
    };

    const addTask = () => {
        if(action.includes('Editar')){
          let newItem = {...taskItem};
          newItem.task = task;
          dispatch(update({newItem}));
        }else{
          dispatch(add(task));
        }
        setTask('');
        setOpen(false);
      };

      const delTask = () => {
        dispatch(del(taskItem.id));
        setOpen(false);
        setItemAction(true);
      };

    return (
        <React.Fragment>
            <Fab className='floating' color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth={isItemAction ? "md" : "sm"}
                onClose={handleClose}
            >
                {isItemAction 
                  ?
                    <React.Fragment>
                      <DialogTitle>{action}</DialogTitle>
                      <DialogContent>
                          <Box display="flex">
                              <TextField required inputProps={{ maxLength: 50 }} value={task} label="Descripción" variant="filled" fullWidth onChange={(event) => {setTask(event.target.value);}} />
                          </Box>
                      </DialogContent>
                      <DialogActions>
                          <Button color="warning" onClick={handleClose}>Cerrar</Button>
                          <Button disabled={task.length==0} onClick={addTask}>{action == 'Editar Task' ? 'Actualizar' : 'Agregar'}</Button>
                      </DialogActions>
                    </React.Fragment>
                  :
                    <React.Fragment>
                      <DialogTitle>
                        Eliminar tarea
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          ¿Seguro que desea eliminar la tarea seleccionada?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button color="warning" onClick={handleClose}>Cerrar</Button>
                        <Button onClick={delTask} autoFocus>
                          Eliminar
                        </Button>
                      </DialogActions>
                    </React.Fragment>
                }
            </Dialog>
        </React.Fragment>
    );
});