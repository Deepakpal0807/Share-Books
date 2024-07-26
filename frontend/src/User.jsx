import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { CameraAlt, CalendarToday as DateIcon, Email as EmailIcon, Face as UsernameIcon, Book as BookIcon } from "@mui/icons-material";
import moment from "moment";
import { setImage } from './redux/user/userSlice'; // Ensure this path is correct
import Categories from "./components/Books/Categories";

const ProfileCard = ({ text, heading, Icon, sx }) => (
  <Stack direction="row" alignItems="center" spacing={1} sx={{ marginBottom: 1, ...sx }}>
    {Icon && <Icon />}
    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{heading}:</Typography>
    <Typography variant="body1">{text}</Typography>
  </Stack>
);

const User = () => {
  const dispatch = useDispatch();
  const { name, email, username, joinedDate, booksShared, image } = useSelector((state) => state.user);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Update image URL when image changes
    if (image) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);

      // Cleanup function to revoke the object URL
      return () => URL.revokeObjectURL(url);
    } else {
      setImageUrl('');
    }
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(setImage(file));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        margin: 0,
      }}
    >
      <Grid container spacing={2} sx={{ flexGrow: 1, height: "100%" }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              sx={{
                marginTop: "20px",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                minHeight:"88vh"
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  color: "Black",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                }}
              >
                User Profile
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: "8rem",
                    height: "8rem",
                    marginTop: "1rem",
                  }}
                  src={imageUrl} // Use image URL for the Avatar
                />
              </Box>
              <Stack
                sx={{
                  spacing: "20px",
                  marginTop: "20px",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: { xs: "column", sm: "column" },
                }}
              >
                <ProfileCard
                  text={name}
                  heading="Name"
                  Icon={UsernameIcon}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                />
                <ProfileCard
                  text={username}
                  heading="Username"
                  Icon={UsernameIcon}
                  sx={{
                    fontSize: "1.25rem",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                />
                <ProfileCard
                  text={email}
                  heading="Email"
                  Icon={EmailIcon}
                  sx={{
                    fontSize: "1.25rem",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                />
                <ProfileCard
                  text={moment(joinedDate).fromNow()}
                  heading="Joined"
                  Icon={DateIcon}
                  sx={{
                    fontSize: "1.25rem",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                />
                <ProfileCard
                  text={booksShared.toString()}
                  heading="Book Shared"
                  Icon={BookIcon}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    padding: "16px",
                    borderRadius: "8px",
                  }}
                />
              </Stack>
            </Stack>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack
              sx={{ flexGrow: 1, minHeight:"90vh", maxHeight:"90vh", overflow:"auto"}}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 1,
                  marginTop:"30px",
                  textAlign: "center",
                  color: "Black",
                  fontFamily: "cursive",
                  fontWeight:"bold",
                  fontSize:"25px"
                }}
              >
                Contributed Book's
              </Typography>
              <Typography variant="body1" sx={{ color: "#555555" }}>
                <Categories/>
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
