import React from 'react';
import { TableRow, TableCell, Checkbox, TablePagination, Box, TableHead, IconButton, Tooltip } from '@mui/material';
import FilterSelect from './Filter/FilterSelect';
import { TablePaginationProps } from '@mui/material/TablePagination';
import { Task } from '@/types/task';
import { FILTERS } from '@/libs/Constants';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

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
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCompleteSelected: () => void;
  onPendingSelected: () => void;
  onDeleteSelected: () => void;
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
  numSelected,
  onSelectAllClick,
  onCompleteSelected,
  onPendingSelected,
  onDeleteSelected,
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center">
                <Tooltip title="Seleccionar todos">
                  <Checkbox
                    indeterminate={numSelected > 0 && numSelected < totalTasks}
                    checked={totalTasks > 0 && numSelected === totalTasks}
                    onChange={onSelectAllClick}
                  />
                </Tooltip>
                {numSelected > 0 ? (
                  <>
                    <Tooltip title="Marcar como completado">
                      <IconButton onClick={onCompleteSelected}>
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Marcar como pendiente">
                      <IconButton onClick={onPendingSelected}>
                        <ClearIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar tareas seleccionadas">
                      <IconButton onClick={onDeleteSelected}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <FilterSelect value={filterValue} onChange={onFilterChange} options={FILTERS} />
                )}
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
