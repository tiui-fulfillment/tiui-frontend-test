// components/Filter.js
import { useState } from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "@mui/material";

const Filter = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <ButtonGroup
      variant="outlined"
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: { xs: "space-evenly" },
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Button
        variant={activeFilter === "all" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("all")}
        sx={{ marginBlock: { md: "0", xs: "0.5rem" } }}
      >
        Todas
      </Button>
      <Button
        variant={activeFilter === "completed" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("completed")}
        sx={{ marginBlock: { md: "0", xs: "0.5rem" } }}
      >
        Completadas
      </Button>
      <Button
        variant={activeFilter === "pending" ? "contained" : "outlined"}
        onClick={() => handleFilterChange("pending")}
        sx={{ marginBlock: { md: "0", xs: "0.5rem" } }}
      >
        Pendientes
      </Button>
    </ButtonGroup>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
