import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { setUser } from '../redux/user/userSlice';

const Iconbtn = ({ title, icon: Icon, onClick }) => (
  <IconButton color="inherit" title={title} onClick={onClick}>
    <Icon />
  </IconButton>
);

const Navbar = ({ add, setAdd, search, setSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(false));
    navigate("/"); // Redirect to the homepage or login page
  };

  const handleProfile = () => {
    navigate("/user"); // Redirect to the user profile page
  };

  return (
    <div className="container">
      <Box sx={{ flexGrow: 1, fontFamily: "cursive" }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: "grey" }}>
          <Toolbar sx={{ height: "4rem", minHeight: "4rem" }}>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
                fontFamily: "cursive",
              }}
            >
              BookSwap
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 2 }}></Box>
            <Box
              sx={{
                width: "250px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Iconbtn
                title="Search"
                icon={SearchIcon}
                onClick={() => {
                  setAdd(false);
                  setSearch(!search);
                }}
              />
              <Iconbtn
                title="Add Book"
                icon={AddIcon}
                onClick={() => {
                  setAdd(!add);
                  setSearch(false);
                }}
              />
              <Iconbtn
                title="Profile"
                icon={AccountCircleIcon}
                onClick={handleProfile}
              />
              <Iconbtn
                title="Logout"
                icon={ExitToAppIcon}
                onClick={handleLogout}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
