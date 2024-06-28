import { FilterList } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react';

const options = ['Todas', 'Completadas', 'Sin completar'];

export default function Filter({ handleFilter }: { handleFilter: (filter: string) => void }) {
  const [filter, setFilter] = React.useState('Todas');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    setFilter(option);
    handleFilter(option);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
        onClick={handleClick}
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        startIcon={<FilterList />}>
        {filter}
      </Button>
      <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === filter}
            onClick={() => handleMenuItemClick(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
