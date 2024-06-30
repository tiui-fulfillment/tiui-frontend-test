import { Button } from '@mui/material';
import { FilterType } from '../../types/todo';

interface Props {
  tittle: FilterType;
  type: 'button' | 'submit';
  eventClick: (value: FilterType) => void;
}

export const ButtonShared: React.FC<Props> = ({ tittle, type, eventClick }) => {
  return (
    <>
      <Button
        variant='text'
        type={type}
        color='primary'
        onClick={() => eventClick(tittle)}>
        {tittle}
      </Button>
    </>
  );
};
