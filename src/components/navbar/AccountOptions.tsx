import { useState } from "react";
import { Box, Button, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { styles } from "./styles";

const settings = ["Logout"];

interface Props {
  userInfo: {
    name: string;
    position: string;
  };
}

export function AccountOptions({ userInfo: { name, position } }: Props) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Button onClick={handleOpenUserMenu} sx={styles.navbar__accountOptions}>
        <Box sx={styles.navbar__accountDetails}>
          <Typography sx={styles.navbar__userName}>{name}</Typography>
          <Typography component="span" sx={styles.navbar__position}>
            {position}
          </Typography>
        </Box>
        <Avatar sx={styles.navbar__avatar}>JV</Avatar>
      </Button>

      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={handleCloseUserMenu}
            sx={styles.navbar__menu}
          >
            <Typography sx={styles.navbar__menuItem}>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
