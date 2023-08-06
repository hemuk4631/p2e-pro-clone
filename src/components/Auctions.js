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
import AuctionCard from "../cards/AuctionCard";
import Grid from "@mui/material/Grid";
import { trandingData } from "../json/trandingData";

const Auctions = () => {
  const [auctionData, setAuctionData] = useState([]);
  useEffect(() => {
    setAuctionData(trandingData);
  }, []);
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          width: "100%",
          marginBottom: "80px",
          marginTop: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row">
            <Toolbar>
              <Typography sx={{ fontWeight: 800, fontSize: "26px" }}>
                Trending Auctions
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
        <Box sx={{ flexGrow: 1, paddingBottom: "10px" }}>
          <Grid container spacing={2}>
            {auctionData.map((val, ind) => (
              <Grid item key={ind} lg={3}>
                <AuctionCard
                  name={val.username}
                  profile={val.userProfile}
                  banner={val.banner}
                  title={val.title}
                  another={val.anotherProfile}
                  bid={val.bid}
                  end={val.ending}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Auctions;
