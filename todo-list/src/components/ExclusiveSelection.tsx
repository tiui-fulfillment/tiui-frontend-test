import "./Todo.css";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonsMultiple = ({
  filter,
  onFilterChange,
}: {
  filter: string;
  onFilterChange: (newFilter: string) => void;
}) => {
  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => {
    if (newFilter === filter) {
      onFilterChange("");
    } else {
      onFilterChange(newFilter || "");
    }
  };

  return (
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={handleFormat}
      aria-label="text formatting"
      fullWidth
    >
      <ToggleButton
        value="completed"
        aria-label="completed"
        className="btn btn-edit"
      >
        Completadas
      </ToggleButton>
      <ToggleButton value="pending" aria-label="pending">
        Pendientes
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtonsMultiple;
