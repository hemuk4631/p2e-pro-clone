import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import CustomizedSwitches from "./MUI/MuiSwitch";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const pages = ["Home", "Expolre", "Create", "Blog", "Contact"];
const handleCloseNavMenu = () => {
  console.log("clicked");
};
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Header = () => {
  return (
    <>
      <AppBar style={{ position: "relative", background: "#fff" }}>
        <Toolbar>
          <img
            src="https://www.freeiconspng.com/uploads/3d-cube-logo-15.png"
            alt="logo"
            style={{ position: "relative", height: "40px" }}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: "13px", marginLeft: "8px", color: "black" }}
          >
            P2E Pro
          </Typography>
          <Search
            sx={{
              color: "black",
              background: "#d3d3d3",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Collection, item or user"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}

            <Stack direction="row">
              <Toolbar>
                <CustomizedSwitches />
                <Stack direction="row" spacing={1}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
                  />
                  <Button
                    variant="contained"
                    startIcon={<LoyaltyOutlinedIcon />}
                  >
                    Login
                  </Button>
                </Stack>
              </Toolbar>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/1567831.jpg")`,
          width: "100%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "60px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                sx={{ background: "yellow", color: "black" }}
              >
                Expolre NFTs
              </Button>
              <Button
                sx={{ background: "#fff", color: "black" }}
                variant="outlined"
              >
                Create NFT
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "150px",
            }}
          >
            <Card sx={{ maxWidth: 190 }}>
              <CardMedia
                component="img"
                height="100%"
                image="https://dspncdn.com/a1/media/692x/ea/70/3b/ea703b931be647ac17bbc923db403d65.jpg"
                alt="Paella dish"
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
