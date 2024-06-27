import React, { useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';

interface SelectButtonProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const SelectButton: React.FC<SelectButtonProps> = ({ value, onChange, options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    onChange(option);
    handleClose();
  };

  return (
    <>
      <Button
        variant="text"
        style={{
          marginLeft:20,
          padding:8,
        }}
        color="inherit"
        startIcon={<FilterListIcon />}
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      >
        {value || 'Select Option'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectButton;
