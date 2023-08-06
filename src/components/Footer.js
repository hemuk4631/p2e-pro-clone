import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(14)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        padding: "50px 50px 0 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eeeeee",
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <Typography variant="h4">
            <Box
              sx={{
                width: "100%",
                height: 300,
              }}
            >
              <Toolbar>
                <img
                  src="https://www.freeiconspng.com/uploads/3d-cube-logo-15.png"
                  alt="logo"
                  style={{ position: "relative", height: "25px" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "13px",
                    fontWeight: 900,
                    marginLeft: "8px",
                  }}
                >
                  P2E Pro
                </Typography>
              </Toolbar>
              <Typography sx={{ paddingBottom: "10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 900,
                  marginLeft: "8px",
                }}
              >
                Language
              </Typography>

              <Button
                sx={{ borderRadius: "40px" }}
                startIcon={
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 20, height: 20 }}
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  />
                }
                endIcon={<KeyboardArrowDownIcon />}
                variant="outlined"
              >
                English
              </Button>
            </Box>
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h4">
            <Box
              sx={{
                width: "100%",
                height: 300,
              }}
            >
              <Typography variant="h6">Market Place</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Profile
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Market Place
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Creator
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Activity
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Collections
                </Button>
              </Box>
            </Box>
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h4">
            <Box
              sx={{
                width: "100%",
                height: 300,
              }}
            >
              <Typography variant="h6">Company</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Upload
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Contact Wallet
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Our Blog
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Item Details
                </Button>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "12px",
                    color: "black",
                  }}
                  variant="text"
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h4">
            <Box
              sx={{
                width: "100%",
                height: 300,
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "18px" }}>
                Join Newsletter
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                }}
              >
                <Search sx={{ margin: "12px 0" }}>
                  <SearchIconWrapper sx={{ paddingLeft: "4px" }}>
                    <Button
                      sx={{
                        padding: "4px 6px",
                        fontSize: "12px",
                      }}
                      variant="contained"
                    >
                      Subscribe
                    </Button>
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{ display: "flex" }}
                    placeholder="Your Email"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Stack
                  sx={{
                    paddingTop: "10px",
                    display: "flex",
                    justifyContent: " space-evenly",
                  }}
                  spacing={2}
                  direction="row"
                >
                  <TwitterIcon />
                  <InstagramIcon />
                  <YouTubeIcon />
                  <GitHubIcon />
                  <LinkedInIcon />
                </Stack>
              </Box>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
