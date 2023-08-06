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
import HotCollectionCard from "../cards/HotCollectionCard";
import Grid from "@mui/material/Grid";
import { hotCollectionData } from "../json/hotCollectionData";
const HotCollections = () => {
  const [collectionData, setCollectionData] = useState([]);
  useEffect(() => {
    setCollectionData(hotCollectionData);
  }, []);

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          width: "100%",
          marginBottom: "80px",
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
                Hot Collections
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
            {collectionData.map((val, ind) => (
              <Grid item key={ind} lg={4}>
                <HotCollectionCard
                  img1={val.imgFirst}
                  img2={val.imgSec}
                  img3={val.imgThird}
                  user={val.userProfile}
                  title={val.title}
                  collection={val.collection}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HotCollections;
