import { Typography } from "@mui/material";
import { styles } from "./styles";

interface Props {
  productName: string;
}

export function Title({ productName }: Props) {
  return (
    <Typography noWrap component="a" sx={styles.navbar__title}>
      <Typography
        color="primary"
        component="span"
        sx={styles.navbar__brandName}
      >
        TIUI
      </Typography>
      <Typography component="span" sx={styles.navbar__productName}>
        {productName}
      </Typography>
    </Typography>
  );
}
