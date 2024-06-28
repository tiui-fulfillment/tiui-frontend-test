import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ShowState } from "../types";

type FilterFieldsProps = {
  showedTodos: ShowState;
  setShowedTodos: React.Dispatch<React.SetStateAction<ShowState>>;
  filterName: string;
  setFilterName: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterFields({
  showedTodos,
  setShowedTodos,
  filterName,
  setFilterName,
}: FilterFieldsProps) {
  function handleSelect(event: SelectChangeEvent) {
    setShowedTodos(event.target.value as ShowState);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        my: 2,
        alignItems: "center",
      }}
    >
      <FormControl>
        <InputLabel id="show-filter">Show</InputLabel>
        <Select
          labelId="show-filter"
          value={showedTodos}
          onChange={handleSelect}
          label="Show"
          size="small"
        >
          <MenuItem value={ShowState.All}>{ShowState.All}</MenuItem>
          <MenuItem value={ShowState.NotCompleted}>
            {ShowState.NotCompleted}
          </MenuItem>
          <MenuItem value={ShowState.Completed}>{ShowState.Completed}</MenuItem>
        </Select>
      </FormControl>

      <TextField
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
        label="Find Description"
        size="small"
        variant="standard"
      />
    </Box>
  );
}
