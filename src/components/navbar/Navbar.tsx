import { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

const settings = ["Logout"];

export function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ background: "#fff", color: "#222" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            noWrap
            component="a"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              color="primary"
              component="span"
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              TIUI
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "20px", letterSpacing: 0, fontWeight: 300 }}
            >
              Planner
            </Typography>
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleOpenUserMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "right",
                }}
              >
                <Typography
                  sx={{
                    fontSize: ".9rem",
                    fontWeight: 700,
                    color: "#222",
                    textTransform: "capitalize",
                  }}
                >
                  Jesús Murillo Velasco
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: ".6rem", fontWeight: 300, color: "#666" }}
                >
                  Frontend Developer
                </Typography>
              </Box>
              <Avatar sx={{ background: "dodgerblue" }}>JV</Avatar>
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
                  sx={{ width: "150px" }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      width: "100%",
                      textAlign: "right",
                      color: "red",
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
