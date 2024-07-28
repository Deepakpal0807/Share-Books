import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import axios from "axios";
import { useFileHandler, useInputValidation } from "6pp";
import { setBooksShared, setEmail, setJoinedDate, setName, setUser, setUsername, setCity, setPincode } from "../redux/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  const toggle = () => setIsLogin(!isLogin);

  const username = useInputValidation("");
  const useremail = useInputValidation("");
  const userpassword = useInputValidation("");
  const avatar = useFileHandler("single", 5);
  const usercity = useInputValidation("");
  const userpincode = useInputValidation("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: useremail.value,
      password: userpassword.value,
    };
  
    try {
      const response = await axios.post(`https://bz95rd6f-5173.inc1.devtunnels.ms/api/auth/login`, data);
      console.log("Login response: ", response);
  
      if (response.data) {
        dispatch(setName(response.data.user.name));
        dispatch(setEmail(response.data.user.email));
        dispatch(setUsername(response.data.user.email));
        dispatch(setUser(true));
        dispatch(setJoinedDate(response.data.user.joinedDate));
        dispatch(setBooksShared(response.data.user.booksShared));
        dispatch(setCity(response.data.user.city)); // Ensure city is being dispatched
        dispatch(setPincode(response.data.user.pincode)); // Ensure pincode is being dispatched
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setAuthError(`Error: ${error.response.data.message}`);
      } else {
        setAuthError("An unexpected error occurred.");
        console.log(error);
      }
    }
    setPasswordError("");
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = {
      name: username.value,
      email: useremail.value,
      password: userpassword.value,
      city: usercity.value,
      pincode: userpincode.value,
    };

    try {
      const response = await axios.post(`http://localhost:5173/api/auth/register`, data);
      console.log("Signup response: ", response);

      if (response.data) {
        if (response.data.email) {
          dispatch(setName(response.data.name));
          dispatch(setEmail(response.data.email));
          dispatch(setUsername(response.data.name));
          dispatch(setUser(true));
          dispatch(setJoinedDate(response.data.joinedDate));
          dispatch(setBooksShared(0));
          dispatch(setCity(response.data.city));
          dispatch(setPincode(response.data.pincode));
          navigate("/");
        } else {
          alert("User available, please login.");
          toggle();
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        setAuthError("An unexpected error occurred.");
        console.log(error);
      }
    }
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
        component="main"
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
              <Typography variant="h5" marginTop="20px" sx={{ fontFamily: "cursive" }}>
                Login
              </Typography>
              <form
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
                {authError && (
                  <Typography color="error" variant="caption">
                    {authError}
                  </Typography>
                )}

                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                  Login
                </Button>
                <Typography textAlign="center" m="1rem" sx={{ mt: 2 }}>
                  Or
                </Typography>
                <Button fullWidth color="secondary" onClick={toggle}>
                  SIGN UP Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" sx={{ fontFamily: "cursive" }}>
                Sign Up
              </Typography>
              <form
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
                    <input type="file" onChange={avatar.changeHandler} hidden />
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    width="fit-content"
                    display="block"
                    margin="auto"
                    marginTop="1rem"
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
                  required
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
                <TextField
                  type="text"
                  required
                  label="City"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={usercity.value}
                  onChange={usercity.changeHandler}
                />
                <TextField
                  type="text"
                  required
                  label="Pincode"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={userpincode.value}
                  onChange={userpincode.changeHandler}
                />
                {passwordError && (
                  <Typography color="error" variant="caption">
                    {passwordError}
                  </Typography>
                )}
                {authError && (
                  <Typography color="error" variant="caption">
                    {authError}
                  </Typography>
                )}
                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                  SIGN UP
                </Button>
                <Typography textAlign="center" m="1rem" sx={{ mt: 2 }}>
                  Or
                </Typography>
                <Button fullWidth color="secondary" onClick={toggle}>
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
