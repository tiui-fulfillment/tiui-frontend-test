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
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const addTask = () => {
    const taskError = isRequiredInput(task.text);
    if (taskError) {
      setTask({ ...task, error: taskError });
      return;
    }

    if (editingTask) {
      const updatedTasks = tasks.map((t) =>
        t.id === editingTask.id ? { ...t, task: task.text, isComplete: isComplete } : t
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        task: task.text,
        date: new Date().toISOString(), // Guardar fecha en formato ISO
        isComplete: isComplete,
      };
      setTasks([newTask, ...tasks]);
    }
    
    setTask({ text: '', error: '' });
    setIsComplete(false);
  };

  const startEditTask = (task: Task) => {
    setTask({ text: task.task, error: '' });
    setIsComplete(task.isComplete);
    setEditingTask(task);
  };

  const cancelEdit = () => {
    setTask({ text: '', error: '' });
    setIsComplete(false);
    setEditingTask(null);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
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

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelectedTasks = filteredTasks.map((task) => task.id);
      setSelectedTasks(newSelectedTasks);
      return;
    }
    setSelectedTasks([]);
  };

  const handleSelectClick = (taskId: number) => {
    const selectedIndex = selectedTasks.indexOf(taskId);
    let newSelectedTasks: number[] = [];

    if (selectedIndex === -1) {
      newSelectedTasks = newSelectedTasks.concat(selectedTasks, taskId);
    } else if (selectedIndex === 0) {
      newSelectedTasks = newSelectedTasks.concat(selectedTasks.slice(1));
    } else if (selectedIndex === selectedTasks.length - 1) {
      newSelectedTasks = newSelectedTasks.concat(selectedTasks.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTasks = newSelectedTasks.concat(
        selectedTasks.slice(0, selectedIndex),
        selectedTasks.slice(selectedIndex + 1)
      );
    }

    setSelectedTasks(newSelectedTasks);
  };

  const handleCompleteSelected = () => {
    setTasks(tasks.map((task) => 
      selectedTasks.includes(task.id) ? { ...task, isComplete: true } : task
    ));
    setSelectedTasks([]);
  };

  const handlePendingSelected = () => {
    setTasks(tasks.map((task) => 
      selectedTasks.includes(task.id) ? { ...task, isComplete: false } : task
    ));
    setSelectedTasks([]);
  };

  const handleDeleteSelected = () => {
    setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
    setSelectedTasks([]);
  };

  return (
    <Layout title="📋 To-Do List">
      <AddTask
        task={task}
        onChange={(e) => setTask({ text: e.target.value, error: '' })}
        addTask={addTask}
        editingTask={editingTask}
        cancelEdit={cancelEdit}
      />
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
            numSelected={selectedTasks.length}
            onSelectAllClick={handleSelectAllClick}
            onCompleteSelected={handleCompleteSelected}
            onPendingSelected={handlePendingSelected}
            onDeleteSelected={handleDeleteSelected}
          />
          <TaskList
            tasks={filteredTasks}
            page={page}
            rowsPerPage={rowsPerPage}
            onToggleComplete={(taskId, isComplete) =>
              setTasks(tasks.map((task) =>
                task.id === taskId ? { ...task, isComplete } : task
              ))
            }
            onEditTask={startEditTask}
            onDeleteTask={deleteTask}
            onSelectClick={handleSelectClick}
            selectedTasks={selectedTasks}
          />
        </Table>
      </TableContainer>
    </Layout>
  );
}
