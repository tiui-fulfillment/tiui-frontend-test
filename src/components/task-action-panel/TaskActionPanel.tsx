import { Box, MenuItem, SelectChangeEvent } from "@mui/material";
import { AddButton } from "../add-button/AddButton";
import { useFilters } from "../../custom-hooks/useFilters";
import { styles } from "./styles";
import { SearchFilter } from "./SearchFilter";
import { SelectFilter } from "./SelectFilter";

export function TaskActionPanel() {
  const { filters, setFilters } = useFilters();

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFilters({ [event.target.name]: event.target.value as string });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: event.target.value });
  };

  return (
    <Box sx={styles.taskActionPanel}>
      <SearchFilter
        searchValue={filters.search}
        onSearchChange={handleSearchChange}
      />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <SelectFilter
            selectValue={filters.status}
            onSelectChange={handleSelectChange}
            name="status"
            label="Estado"
          >
            <MenuItem value="all">Todas</MenuItem>
            <MenuItem value="completed">Completadas</MenuItem>
            <MenuItem value="pending">Pendientes</MenuItem>
          </SelectFilter>

          <SelectFilter
            selectValue={filters.priority}
            onSelectChange={handleSelectChange}
            name="priority"
            label="Prioridad"
          >
            <MenuItem value="all">Todas</MenuItem>
            <MenuItem value="low">Baja</MenuItem>
            <MenuItem value="medium">Media</MenuItem>
            <MenuItem value="high">Alta</MenuItem>
          </SelectFilter>
        </Box>

        <AddButton />
      </Box>
    </Box>
  );
}
