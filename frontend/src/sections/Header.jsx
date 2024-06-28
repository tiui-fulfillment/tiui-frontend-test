import { Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { FilterAlt } from "@mui/icons-material"
import React, { useState } from 'react'

export default function Header({ setFilter }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = (filter) => {
    setAnchorEl(null);
    if (filter) setFilter(filter);
  };

  return (
    <Grid container sx={{ display: "flex", alignItems: "center" }}>
      <Grid item xs={11}>
        <Typography variant="h6" fontWeight="bold">
          Lista de Tareas
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton color="primary" onClick={handleClick}>
          <FilterAlt />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(null)}
        >
          <MenuItem onClick={() => handleClose("all")}>Todos</MenuItem>
          <MenuItem onClick={() => handleClose("completed")}>Completados</MenuItem>
          <MenuItem onClick={() => handleClose("pending")}>Pendientes</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  )
}
