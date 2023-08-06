import React, { useEffect, useState } from "react";
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
import SellerCard from "../cards/SellerCard";
import Grid from "@mui/material/Grid";
import { topSellerData } from "../json/topSellerData";

const Sellers = () => {
  const [sellerData, setSellerData] = useState([]);
  useEffect(() => {
    setSellerData(topSellerData);
  }, []);
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          width: "100%",
          marginBottom: "50px",
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
                Our Top Sellers
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
            {sellerData.map((val, ind) => (
              <Grid item key={ind} lg={2}>
                <SellerCard
                  name={val.name}
                  profile={val.profile}
                  bid={val.bid}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Sellers;
