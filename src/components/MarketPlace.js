import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Button from "@mui/material/Button";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import MarketPlaceCard from "../cards/MarketPlaceCard";
import Grid from "@mui/material/Grid";
import RefreshIcon from "@mui/icons-material/Refresh";
import { marketPlaceData } from "../json/marketPlaceData";
import { filterBtn } from "../json/filterBtn";
import MarketFilterBtn from "./MUI/MarketFilterBtn";
const MarketPlace = () => {
  const [marketData, setMarketData] = useState([]);
  const [marketFilterBtn, setMarketFilterBtn] = useState([]);
  useEffect(() => {
    setMarketData(marketPlaceData);
    setMarketFilterBtn(filterBtn);
  }, []);

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          width: "100%",
          paddingBottom: "80px",
          marginTop: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "25px",
          }}
        >
          <Stack direction="row">
            <Toolbar>
              <Typography sx={{ fontWeight: 800, fontSize: "26px" }}>
                Market Place
              </Typography>
            </Toolbar>
          </Stack>
          <Toolbar>
            <Stack direction="row" spacing={1}>
              <Fab size="small" color="secondary" aria-label="add">
                <KeyboardArrowLeftOutlinedIcon />
              </Fab>
              <Fab size="small" color="secondary" aria-label="add">
                <KeyboardArrowRightOutlinedIcon />
              </Fab>

              <Button
                variant="contained"
                endIcon={<ArrowRightAltOutlinedIcon />}
              >
                View All
              </Button>
            </Stack>
          </Toolbar>
        </Box>
        <Box>
          <Grid container spacing={3} sx={{ padding: "0 0  20px 15px " }}>
            {marketFilterBtn.map((val, ind) => (
              <Grid item key={ind}>
                <MarketFilterBtn title={val.title} icon={val.icon} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, paddingBottom: "30px" }}>
          <Grid container spacing={2}>
            {marketData.map((val, ind) => (
              <Grid item key={ind} lg={3}>
                <MarketPlaceCard
                  username={val.username}
                  userProfile={val.userProfile}
                  banner={val.banner}
                  anotherUser={val.anotherUserName}
                  anotherUserProfile={val.anotherUserProfile}
                  title={val.title}
                  bid={val.currentBid}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button
          variant="contained"
          sx={{ minWidth: "276px", margin: "auto", display: "flex" }}
          startIcon={<RefreshIcon />}
        >
          View All Item
        </Button>
      </Container>
    </>
  );
};

export default MarketPlace;
