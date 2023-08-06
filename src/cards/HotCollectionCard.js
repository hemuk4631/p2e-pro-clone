import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function HotCollectionCard({
  img1,
  img2,
  img3,
  user,
  title,
  collection,
}) {
  return (
    <Card sx={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "90%",
          margin: "10px 0",
        }}
      >
        <Grid container spacing={1}>
          <Grid item lg={12}>
            <CardMedia
              sx={{ borderRadius: "5px" }}
              component="img"
              height="194"
              image={img1}
              alt="Paella dish"
            />
          </Grid>
          <Grid item lg={4}>
            <CardMedia
              sx={{ borderRadius: "5px" }}
              component="img"
              width="100%"
              height="80px"
              image={img2}
              alt="Paella dish"
            />
          </Grid>
          <Grid item lg={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src={user}
              sx={{ width: 60, height: 60 }}
            />
          </Grid>
          <Grid item lg={4}>
            <CardMedia
              sx={{ borderRadius: "5px" }}
              component="img"
              width="100%"
              height="80px"
              image={img3}
              alt="Paella dish"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: "15px 0 5px 0",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {collection} Collections
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
