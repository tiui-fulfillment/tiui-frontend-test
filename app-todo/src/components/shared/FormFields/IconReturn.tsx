import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BackspaceIcon from '@mui/icons-material/Backspace';

interface Props {
  selectIcon: string;
  color: string;
}

export const IconReturn: React.FC<Props> = ({ selectIcon, color }) => {
  let iconComponent = null;

  switch (selectIcon) {
    case 'settings':
      iconComponent = <SettingsIcon sx={{ color: color }} />;
      break;
    case 'delete':
      iconComponent = <DeleteForeverIcon sx={{ color: color }} />;
      break;
    case 'backspace':
      iconComponent = <BackspaceIcon sx={{ color: color }} />;
      break;
    default:
      iconComponent = null;
  }

  return iconComponent;
};
