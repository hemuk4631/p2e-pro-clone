import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function SellerCard({ name, profile, bid }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#eeeeee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={profile}
            sx={{ width: 80, height: 80 }}
          />
          <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
            ₹ {bid}
          </Typography>
        </div>
      </Box>
    </>
  );
}
