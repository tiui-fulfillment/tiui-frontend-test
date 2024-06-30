import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { AddButton } from "../add-button/AddButton";
import { useFilters } from "../../custom-hooks/useFilters";

export function TaskActionPanel() {
  const { filters, setFilters } = useFilters();

  const handleChange = (event: SelectChangeEvent) => {
    setFilters({ [event.target.name]: event.target.value as string });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: event.target.value });
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
        value={filters.search}
        onChange={handleSearchChange}
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
        <Box sx={{ display: "flex", gap: 3 }}>
          <FormControl fullWidth sx={{ background: "white" }}>
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              value={filters.status}
              label="Estado"
              name="status"
              onChange={handleChange}
            >
              <MenuItem value="all">Todas</MenuItem>
              <MenuItem value="completed">Completadas</MenuItem>
              <MenuItem value="pending">Pendientes</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ background: "white" }}>
            <InputLabel id="demo-simple-select-label">Prioridad</InputLabel>
            <Select
              value={filters.priority}
              label="Prioridad"
              name="priority"
              onChange={handleChange}
            >
              <MenuItem value="all">Todas</MenuItem>
              <MenuItem value="low">Baja</MenuItem>
              <MenuItem value="medium">Media</MenuItem>
              <MenuItem value="high">Alta</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <AddButton />
      </Box>
    </Box>
  );
}
