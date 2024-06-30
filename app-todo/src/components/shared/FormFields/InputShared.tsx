import { TextField } from '@mui/material';

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputShared: React.FC<Props> = ({ value, onChange, name }) => {
  return (
    <>
      <TextField
        id='standard-basic'
        label={name}
        variant='standard'
        value={value}
        name='todo'
        onChange={e => onChange(e.currentTarget.value)}
      />
    </>
  );
};
