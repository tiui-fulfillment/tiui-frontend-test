"use client";

import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

interface TaskFabFiltersProps {
    onFilterChange: (filter: "TO_DO" | "DONE" | "ALL") => void;
}

const TaskFabFilters: React.FC<TaskFabFiltersProps> = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState<"TO_DO" | "DONE" | "ALL">("ALL");

    const handleFilterClick = (filter: "TO_DO" | "DONE" | "ALL") => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    const style = {
        margin: 2,
    };

    return (
        <ButtonGroup size="large" aria-label="Large button group" sx={style}>
            <Button
                key="TO_DO"
                onClick={() => handleFilterClick("TO_DO")}
                variant={activeFilter === "TO_DO" ? "contained" : "outlined"}
            >
                TO DO
            </Button>
            <Button
                key="DONE"
                onClick={() => handleFilterClick("DONE")}
                variant={activeFilter === "DONE" ? "contained" : "outlined"}
            >
                DONE
            </Button>
            <Button
                key="ALL"
                onClick={() => handleFilterClick("ALL")}
                variant={activeFilter === "ALL" ? "contained" : "outlined"}
            >
                ALL
            </Button>
        </ButtonGroup>
    );
};

export default TaskFabFilters;
