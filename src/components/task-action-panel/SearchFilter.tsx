import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styles } from "./styles";

interface Props {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchFilter({ searchValue, onSearchChange }: Props) {
  return (
    <TextField
      placeholder="Búsqueda de tareas"
      type="search"
      sx={styles.searchAction}
      value={searchValue}
      onChange={onSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
