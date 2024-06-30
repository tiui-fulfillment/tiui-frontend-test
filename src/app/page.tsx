'use client'
import React from 'react';
import Layout from '@/components/Layout';
import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList';
import TableHeader from '@/components/TableHeader';
import { useTaskReducer } from '@/hooks/useTaskReducer';
import { Snackbar, Alert, TableContainer, Paper, Table } from '@mui/material';

export default function Home() {
  const [state, dispatch] = useTaskReducer(); // Maneja el estado de la aplicación con useReducer
  const [notification, setNotification] = React.useState<{ message: string; severity: 'success' | 'error' } | null>(null); // Maneja las notificaciones

  // Cierra la notificación
  const handleCloseNotification = () => setNotification(null);

  // Agrega una tarea nueva o edita una tarea existente
  const addTask = () => {
    if (!state.task.text.trim()) {
      // Si la tarea está vacía, muestra un mensaje de error
      dispatch({type:'SET_TASK',payload:{text:'',error:'Se requiere llenar, no puede estar vacío.'}})
      setNotification({ message: 'La tarea no puede estar vacía', severity: 'error' });
      return;
    }

    if (state.selectedTasks.length > 0) {
      // Deselecciona todas las tareas si hay alguna seleccionada
      dispatch({type:'DESELECT_ALL'});
    }

    if (state.editingTask) {
      // Edita una tarea existente
      dispatch({ type: 'EDIT_TASK', payload: { ...state.editingTask, task: state.task.text } });
      setNotification({ message: 'Tarea editada correctamente', severity: 'success' });
    } else {
      // Agrega una nueva tarea
      const newTask = {
        id: Date.now(),
        task: state.task.text,
        date: new Date().toISOString(),
        isComplete: false,
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNotification({ message: 'Tarea agregada correctamente', severity: 'success' });
    }
  };

  // Filtra las tareas según el estado (completadas, pendientes, todas)
  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'Completadas') return task.isComplete;
    if (state.filter === 'Pendientes') return !task.isComplete;
    return true;
  });

  // Obtiene las tareas de la página actual según la paginación
  const pageTasks = filteredTasks.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage);

  return (
    <Layout title="📋 To-Do List">
      <AddTask
        task={state.task}
        onChange={(e) => dispatch({ type: 'SET_TASK', payload: { text: e.target.value, error: '' } })}
        addTask={addTask}
        editingTask={state.editingTask}
        cancelEdit={() => dispatch({ type: 'CANCEL_EDIT' })}
      />
      <TableContainer component={Paper} className={filteredTasks.length===0 ? "tableContainerFull" : 'tableContainer'}>
        <Table size="small" aria-label="a dense table">
          <TableHeader
            totalTasks={filteredTasks.length}
            currentPage={state.page}
            rowsPerPage={state.rowsPerPage}
            onRowsPerPageChange={(event) => dispatch({ type: 'CHANGE_ROWS_PER_PAGE', payload: parseInt(event.target.value, 10) })}
            filterValue={state.filter}
            onFilterChange={(filter) => dispatch({ type: 'SET_FILTER', payload: filter })}
            onPageChange={(event, page) => dispatch({ type: 'CHANGE_PAGE', payload: page })}
            numSelected={state.selectedTasks.length}
            onSelectAllClick={(event) => {
              if (event.target.checked) {
                const newSelectedTasks = pageTasks.map((task) => task.id);
                dispatch({ type: 'SELECT_ALL', payload: newSelectedTasks });
              } else {
                dispatch({ type: 'DESELECT_ALL' });
              }
            }}
            onCompleteSelected={() => dispatch({ type: 'COMPLETE_SELECTED' })}
            onPendingSelected={() => dispatch({ type: 'PENDING_SELECTED' })}
            onDeleteSelected={() => dispatch({ type: 'DELETE_SELECTED' })}
            pageTasksCount={pageTasks.length}
          />
          <TaskList
            tasks={pageTasks}
            onToggleComplete={(taskId, isComplete) => dispatch({ type: 'TOGGLE_COMPLETE', payload: { taskId, isComplete } })}
            onEditTask={(task) => dispatch({ type: 'START_EDIT_TASK', payload: task })}
            onDeleteTask={(taskId) => {
              dispatch({ type: 'DELETE_TASK', payload: taskId });
              setNotification({ message: 'Tarea eliminada correctamente', severity: 'success' });
            }}
            onSelectClick={(taskId) => dispatch({ type: 'SELECT_TASK', payload: taskId })}
            selectedTasks={state.selectedTasks}
          />
        </Table>
      </TableContainer>
      {notification && (
        <Snackbar open autoHideDuration={6000} onClose={handleCloseNotification}>
          <Alert onClose={handleCloseNotification} severity={notification.severity}>
            {notification.message}
          </Alert>
        </Snackbar>
      )}
    </Layout>
  );
}
