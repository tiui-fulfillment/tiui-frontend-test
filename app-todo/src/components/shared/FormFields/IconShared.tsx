import { Tooltip } from '@mui/material';
import { IconReturn } from './IconReturn';

interface Props {
  title: string;
  position: 'right' | 'top' | 'left' | 'bottom';
  selectIcon: string;
  color: string;
}

export const IconShared: React.FC<Props> = ({
  title,
  position,
  selectIcon,
  color
}) => {
  return (
    <>
      <Tooltip
        title={title}
        placement={position}>
        <IconReturn
          selectIcon={selectIcon}
          color={color}
        />
      </Tooltip>
    </>
  );
};
