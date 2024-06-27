import React from 'react';
import { TableRow, TableCell, Checkbox, TablePagination, Box } from '@mui/material';
import SelectButton from './SelectButton';
import { TablePaginationProps } from '@mui/material/TablePagination';
import { Task } from '@/types/task';
import { FILTERS } from '@/libs/Constants';

interface TableHeaderProps {
  page: number;
  rowsPerPage: number;
  setRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tasks: Task[];
  isComplete: boolean;
  setIsComplete: (isComplete: boolean) => void;
  filter: string;
  setFilter: (filter: string) => void;
  onChangePage: TablePaginationProps['onPageChange'];
}

const TableHeader: React.FC<TableHeaderProps> = ({
  page,
  rowsPerPage,
  setRowsPerPage,
  tasks,
  isComplete,
  setIsComplete,
  filter,
  setFilter,
  onChangePage,
}) => {
  return (
    <>
      <TableRow>
        <TableCell padding="checkbox" colSpan={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Checkbox checked={isComplete} onChange={(e) => setIsComplete(e.target.checked)} />
              <SelectButton value={filter} onChange={(value) => setFilter(value)} options={FILTERS} />
            </Box>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50]}
              component="div"
              count={tasks.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={setRowsPerPage}
              labelRowsPerPage="Filas por página"
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`
              }
            />
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableHeader;
