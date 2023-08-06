import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

export default function MarketPlaceCard({
  username,
  userProfile,
  banner,
  anotherUser,
  anotherUserProfile,
  title,
  bid,
}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={<Avatar alt={username} src={userProfile} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={username}
      />
      <CardMedia
        component="img"
        height="194"
        image={banner}
        alt="Paella dish"
      />
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={anotherUserProfile} />}
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        subheader={anotherUser}
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid}</td>
              <td>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 50,
                    fontSize: "10px",
                    padding: "3px 10px",
                    float: "right",
                  }}
                >
                  Place a bid
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
