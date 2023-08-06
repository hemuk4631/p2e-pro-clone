import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Testimonial = () => {
  return (
    <>
      <Box sx={{ width: "100%", paddingBottom: "60px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "28px", fontWeight: 700 }}
          >
            Mint, buy and sell
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "28px", fontWeight: 700 }}
          >
            or just launch your own NFT store
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={1} direction="row">
            <Card
              sx={{ minWidth: 275, background: "#eeeeee", padding: "65px 0" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "radial-gradient(#fff, #94bbe9)",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <AdminPanelSettingsIcon sx={{ fontSize: "35px" }} />
                </Box>
                <Typography>Buy and sell your</Typography>
                <Typography>NFTs</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ minWidth: 275, background: "#eeeeee", padding: "65px 0" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    background: "radial-gradient(#fff, #94bbe9)",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <RocketLaunchIcon sx={{ fontSize: "35px" }} />
                </Box>
                <Typography>Discover</Typography>
                <Typography>Top artists & creator</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ minWidth: 275, background: "#eeeeee", padding: "65px 0" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    background: "radial-gradient(#fff, #94bbe9)",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <AccountBalanceWalletIcon sx={{ fontSize: "35px" }} />
                </Box>
                <Typography>Earn money by trading</Typography>
                <Typography>NFTs</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;
