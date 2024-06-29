import { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

export function TaskActionPanel() {
  const [filter, setFilter] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: {
          sm: "row",
          xs: "column",
        },
        gap: 4,
      }}
    >
      <TextField
        id="outlined-search"
        placeholder="Busqueda de tareas"
        sx={{
          width: {
            sm: "320px",
            xs: "100%",
          },
          background: "white",
        }}
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ minWidth: 200, background: "white" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mostrar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Mostrar"
              onChange={handleChange}
            >
              <MenuItem value="all">Todas Las Tareas</MenuItem>
              <MenuItem value="done">Tareas Completadas</MenuItem>
              <MenuItem value="pending">Tareas Pendientes</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          size="large"
          endIcon={<AddIcon />}
          sx={{ height: "56px" }}
        >
          Agregar Tarea
        </Button>
      </Box>
    </Box>
  );
}
