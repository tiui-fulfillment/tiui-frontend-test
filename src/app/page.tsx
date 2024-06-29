'use client'
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList/TaskList';
import TableHeader from '@/components/TableHeader';
import { InputTask, Task } from '@/types/task';
import isRequiredInput from '@/libs/isRequiredInput';
import { Paper, Table, TableContainer, TablePaginationOwnProps } from '@mui/material';

type OnPageChangeType = TablePaginationOwnProps['onPageChange'];
type onRowsPerPageChangeType = TablePaginationOwnProps['onRowsPerPageChange'];

export default function Home() {
  const [page, setPage] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<InputTask>({ text: '', error: '' });
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('Todos');

  const addTask = () => {
    const taskError = isRequiredInput(task.text);
    if (taskError) {
      setTask({ ...task, error: taskError });
      return;
    }
  
    const newTask = {
      id: Date.now(),
      task: task.text,
      date: new Date().toISOString(), // Guardar fecha en formato ISO
      isComplete: isComplete,
    };
    setTasks([newTask, ...tasks]);
    setTask({ text: '', error: '' });
    setIsComplete(false);
  };
  

  const handleChangePage: OnPageChangeType = (event, page) => {
    setPage(page);
  };

  const handleToggleComplete = (taskId: number, isComplete: boolean) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, isComplete } : task
    ));
  };

  const handleChangeRowsPerPage: onRowsPerPageChangeType = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completadas') return task.isComplete;
    if (filter === 'Pendientes') return !task.isComplete;
    return true;
  });

  return (
    <Layout title="📋 To-Do List">
      <AddTask task={task} onChange={(e) => setTask({ text: e.target.value, error: '' })} addTask={addTask} />
      <TableContainer component={Paper} className="tableContainer">
        <Table size="small" aria-label="a dense table">
          <TableHeader
            totalTasks={tasks.length}
            currentPage={page}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            isTaskComplete={isComplete}
            onTaskCompleteChange={setIsComplete}
            filterValue={filter}
            onFilterChange={setFilter}
            onPageChange={handleChangePage}
          />
          <TaskList
            tasks={filteredTasks}
            page={page}
            rowsPerPage={rowsPerPage}
            onToggleComplete={handleToggleComplete}
          />
        </Table>
      </TableContainer>
    </Layout>
  );
}
