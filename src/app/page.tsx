import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import Layout from '@/components/Layout';

const ToDoList = () => {
  return (
    <Layout>
      <Container className="container">
        <Box className="spacer"></Box>
        <TableContainer component={Paper} className="tableContainer">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>To-Do List</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Render your table rows here */}
              <TableRow>
                <TableCell>Item 1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Item 2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Item 3</TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="spacer"></Box>
      </Container>
    </Layout>
  );
};

export default ToDoList;
