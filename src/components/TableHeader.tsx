import React from 'react';
import { TableRow, TableCell, Checkbox, TablePagination, Box, TableHead } from '@mui/material';
import FilterSelect from './Filter/FilterSelect';
import { TablePaginationProps } from '@mui/material/TablePagination';
import { Task } from '@/types/task';
import { FILTERS } from '@/libs/Constants';

interface TableHeaderProps {
  currentPage: number;
  rowsPerPage: number;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  totalTasks: number;
  isTaskComplete: boolean;
  onTaskCompleteChange: (isComplete: boolean) => void;
  filterValue: string;
  onFilterChange: (filter: string) => void;
  onPageChange: TablePaginationProps['onPageChange'];
}

const TableHeader: React.FC<TableHeaderProps> = ({
  currentPage,
  rowsPerPage,
  onRowsPerPageChange,
  totalTasks,
  isTaskComplete,
  onTaskCompleteChange,
  filterValue,
  onFilterChange,
  onPageChange,
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" colSpan={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Checkbox checked={isTaskComplete} onChange={(e) => onTaskCompleteChange(e.target.checked)} />
              <FilterSelect value={filterValue} onChange={onFilterChange} options={FILTERS} />
            </Box>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50]}
              component="div"
              count={totalTasks}
              rowsPerPage={rowsPerPage}
              page={currentPage}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
              labelRowsPerPage="Filas por página"
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`
              }
            />
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
