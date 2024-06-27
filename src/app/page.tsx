'use client'
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Box, TextField, Button } from '@mui/material';
import Layout from '@/components/Layout';
import TableHeader from '@/components/TableHeader';
import { FilterType, InputTask, Task } from '@/types/task';
import AddIcon from '@mui/icons-material/Add';
import isRequiredInput from '@/libs/isRequiredInput';
import { TablePaginationOwnProps } from "@mui/material/TablePagination";
import AddTask from '@/components/AddTask';

// Define el tipo utilizando `typeof`
type OnPageChangeType = TablePaginationOwnProps['onPageChange'];
type onRowsPerPageChangeType = TablePaginationOwnProps['onRowsPerPageChange'];
// import './Home.css';

export default function Home() {
  const [page, setPage] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<InputTask>({text:'',error:''});
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('Todos');

  const addTask = () => {
    const taskError = isRequiredInput(task.text);
    if (taskError) {
      setTask({...task,error:taskError});
      return
    }

    const newTask = {
      id: Date.now(),
      task: task.text,
      date: new Date().toLocaleString(),
      isComplete: isComplete,
    };
    setTasks([newTask,...tasks]);
    setTask({text:'',error:''});
    setIsComplete(false);
  };

  const handleChangePage: OnPageChangeType = (event, page) => {
    setPage(page);
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

  useEffect(()=>{
  console.log({filter});
  },[filter])

  return (
    <Layout title="📋 To-Do List">
      <AddTask task={task} onChange={(e) => setTask({ text: e.target.value, error: '' })} addTask={addTask} />
      <TableContainer component={Paper} className="tableContainer">
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableHeader
              tasks={tasks}
              page={page}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={handleChangeRowsPerPage}
              isComplete={isComplete}
              setIsComplete={setIsComplete}
              filter={filter}
              setFilter={setFilter}
              onChangePage={handleChangePage}
            />
          </TableHead>
          <TableBody>
            {filteredTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
              <TableRow key={task.id}>
                <TableCell padding='checkbox'>
                  <Checkbox checked={task.isComplete} />
                </TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
