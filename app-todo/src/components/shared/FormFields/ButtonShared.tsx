import { Button } from '@mui/material';

interface Props {
  tittle: string;
  type: 'button' | 'submit';
}

export const ButtonShared: React.FC<Props> = ({ tittle, type }) => {
  return (
    <>
      <Button
        variant='text'
        type={type}>
        {tittle}
      </Button>
    </>
  );
};
