import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  selectValue: string;
  children: JSX.Element | JSX.Element[];
  name: string;
  label: string;
  onSelectChange: (event: SelectChangeEvent) => void;
}

export function SelectFilter({
  selectValue,
  children,
  name,
  label,
  onSelectChange,
}: Props) {
  return (
    <FormControl fullWidth sx={{ background: "white" }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectValue}
        label={label}
        name={name}
        onChange={onSelectChange}
      >
        {children}
      </Select>
    </FormControl>
  );
}
