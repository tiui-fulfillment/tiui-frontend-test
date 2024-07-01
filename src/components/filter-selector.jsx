/* eslint-disable react/prop-types */
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { filterOptions } from "../constants/constants ";
import { useState } from "react";
export const FilterSelector = ({applyFilter, countTodos}) =>{

    const [selected, setSelected] = useState("all");
    const handleChange = (event, newSelected) => {
        setSelected(newSelected);
        applyFilter(newSelected);
      };

    return <ToggleButtonGroup
    color="success"
    value={selected}
    exclusive
    onChange={handleChange}
    aria-label="Platform"
  >
    <ToggleButton value={filterOptions.all}>
      Todos: {countTodos.all}
    </ToggleButton>
    <ToggleButton value={filterOptions.pending}>
      Pendientes: {countTodos.pending}
    </ToggleButton>
    <ToggleButton value={filterOptions.completed}>
      Completados: {countTodos.completed}
    </ToggleButton>
  </ToggleButtonGroup>
}