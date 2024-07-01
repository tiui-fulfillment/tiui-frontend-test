import { Tab, Tabs } from "@mui/material"

import type { FilterProps } from "../interfaces/interface"

const Filter = ({ filter, setFilter }: FilterProps) => {
  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setFilter(newValue)
  }

  return (
    <Tabs
      value={ filter }
      onChange={ handleChange }
      aria-label="filter tabs"
    >
      <Tab value="all" label="All" />
      <Tab value="completed" label="Completed" />
      <Tab value="incomplete" label="Not Completed" />
    </Tabs>
  )
}

export default Filter