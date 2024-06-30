import React from 'react';
import { TableRow, TableCell, Checkbox, TablePagination, Box, TableHead, IconButton, Tooltip } from '@mui/material';
import FilterSelect from './FilterSelect';
import { TablePaginationProps } from '@mui/material/TablePagination';
import { FILTERS } from '@/libs/Constants';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

interface TableHeaderProps {
  currentPage: number;
  rowsPerPage: number;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  totalTasks: number;
  filterValue: string;
  onFilterChange: (filter: string) => void;
  onPageChange: TablePaginationProps['onPageChange'];
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCompleteSelected: () => void;
  onPendingSelected: () => void;
  onDeleteSelected: () => void;
  pageTasksCount: number;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  currentPage,
  rowsPerPage,
  onRowsPerPageChange,
  totalTasks,
  filterValue,
  onFilterChange,
  onPageChange,
  numSelected,
  onSelectAllClick,
  onCompleteSelected,
  onPendingSelected,
  onDeleteSelected,
  pageTasksCount,
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={4} >
          <Box sx={{ minHeight: '52px' }} display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Tooltip title="Seleccionar todos">
                <Checkbox
                  indeterminate={numSelected > 0 && numSelected < pageTasksCount} // Checkbox en estado indeterminado si solo algunas tareas están seleccionadas
                  checked={pageTasksCount > 0 && numSelected === pageTasksCount} // Checkbox marcado si todas las tareas visibles están seleccionadas
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
            {numSelected === 0 && (
              <TablePagination
                rowsPerPageOptions={[10, 20, 50]}
                component="div"
                count={totalTasks} // Utiliza el número de tareas filtradas
                rowsPerPage={rowsPerPage}
                page={currentPage}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                labelRowsPerPage="Filas por página"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`
                }
              />
            )}
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
