import { useFileHandler, useInputValidation } from "6pp";
import { CameraAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBooksShared, setEmail, setJoinedDate, setName, setUser, setUsername } from '../redux/user/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const toggle = () => setIsLogin(!isLogin);

  const username = useInputValidation("");
  const useremail = useInputValidation("");
  const userpassword = useInputValidation("");
  const avatar = useFileHandler("single", 5);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userpassword.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }
    setPasswordError("");
    dispatch(setName(username.value));
    dispatch(setEmail(useremail.value));
    dispatch(setUsername(username.value));
    dispatch(setUser(true));
    dispatch(setJoinedDate(new Date().toISOString()));
    dispatch(setBooksShared(0));
    navigate('/user');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (userpassword.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }
    setPasswordError("");
    dispatch(setName(username.value));
    dispatch(setEmail(useremail.value));
    dispatch(setUsername(username.value));
    dispatch(setUser(true));
    dispatch(setJoinedDate(new Date().toISOString()));
    dispatch(setBooksShared(0));
    navigate('/user');
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #6a3093, #1a2980)",
        color: "#fff",
        padding: "20px",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-20px",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          {isLogin ? (
            <>
              <Typography
                variant="h5"
                marginTop="20px"
                sx={{ fontFamily: "cursive" }}
              >
                Login
              </Typography>
              <form
                component="form"
                sx={{
                  mt: 2,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  type="text"
                  required
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={useremail.value}
                  onChange={useremail.changeHandler}
                />

                <TextField
                  type="password"
                  required
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={userpassword.value}
                  onChange={userpassword.changeHandler}
                />
                {passwordError && (
                  <Typography color="error" variant="caption">
                    {passwordError}
                  </Typography>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m="1rem" sx={{ mt: 2 }}>
                  Or
                </Typography>
                <Button
                  fullWidth
                  color="secondary"
                  onClick={toggle}
                >
                  SIGN UP Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" sx={{ fontFamily: "cursive" }}>
                Sign Up{" "}
              </Typography>
              <form
                component="form"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onSubmit={handleSignup}
              >
                <Stack
                  position="relative"
                  width="10rem"
                  margin="auto"
                  alignItems="center"
                >
                  <Avatar
                    sx={{
                      width: "8rem",
                      height: "8rem",
                      marginTop: "1rem",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "0",
                      bottom: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <CameraAlt />
                    <input
                      type="file"
                      onChange={avatar.changeHandler}
                      hidden
                    />
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    width={"fit-content"}
                    display={"block"}
                    margin={"auto"}
                    marginTop={"1rem"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}

                <TextField
                  type="text"
                  required
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  type="text"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={useremail.value}
                  onChange={useremail.changeHandler}
                />
                <TextField
                  type="password"
                  required
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={userpassword.value}
                  onChange={userpassword.changeHandler}
                />
                {passwordError && (
                  <Typography color="error" variant="caption">
                    {passwordError}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  SIGN UP
                </Button>
                <Typography textAlign={"center"} m="1rem" sx={{ mt: 2 }}>
                  Or
                </Typography>
                <Button
                  fullWidth
                  color="secondary"
                  onClick={toggle}
                >
                  LOGIN Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
