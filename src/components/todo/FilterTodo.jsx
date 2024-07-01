import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function FilterTodo(props) {
  const handleChange = (filter) => {
    props.setTodoFilter(filter.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-autowidth-label">Estatus</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={props.todoFilter}
        onChange={handleChange}
        label="Estatus"
      >
        <MenuItem value="all">
          <em>Todos</em>
        </MenuItem>
        <MenuItem value="false">Sin realizar</MenuItem>
        <MenuItem value="true">Realizado</MenuItem>
      </Select>
    </FormControl>
  );
}
