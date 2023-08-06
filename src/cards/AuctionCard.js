import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function AuctionCard({
  name,
  profile,
  banner,
  title,
  another,
  bid,
  end,
}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={profile} />}
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        subheader={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={banner}
        alt="Paella dish"
      />
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={another} />}
        subheader="Special Suprise"
      />
      <Typography
        sx={{ fontSize: "16px", fontWeight: 600, marginLeft: "20px" }}
      >
        {title}
      </Typography>
      <div
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: "#eeeeee",
          display: "flex",
          justifyContent: "center",
          paddingBlock: "10px",
        }}
      >
        <table style={{ width: "80%", fontSize: "12px" }}>
          <thead>
            <tr>
              <td>Current bid</td>
              <td>Ending In</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid}</td>
              <td>{end}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
