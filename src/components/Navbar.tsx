import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { ThemeToggle } from "./ThemeToggler";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              size="large"
            >
              <MenuIcon />
            </IconButton> */}
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 15V31H5C5.52527 31 6.04541 31.1035 6.53076 31.3045C7.01599 31.5055 7.45703 31.8001 7.82837 32.1716C8.19983 32.543 8.49451 32.984 8.69556 33.4693C8.89648 33.9546 9 34.4747 9 35V40H21L36 25V9H31C30.4747 9 29.9546 8.89655 29.4692 8.69553C28.984 8.49451 28.543 8.19986 28.1716 7.82843C27.8002 7.457 27.5055 7.01602 27.3044 6.53073C27.1035 6.04544 27 5.5253 27 5V0H15L0 15ZM17 30H10V19L19 10H26V21L17 30Z"
                fill="currentColor"
              />
            </svg>
            <Typography variant="h6" component="div">
              loanCalcy
            </Typography>
          </div>
          <Box className="flex gap-4 items-center">
            <Button href="/" color="inherit">
              Home
            </Button>
            <Button href="/exchange-rate-live" color="inherit">
              Exchange rates
              <span className="ml-3 animate-ping inline-block bg-blue-700 rounded-full w-2 h-2" />
            </Button>
            <Button href="/error" color="inherit">
              Error Page
            </Button>
            <ThemeToggle />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
