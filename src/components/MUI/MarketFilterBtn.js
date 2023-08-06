import React from "react";
import Button from "@mui/material/Button";

const marketFilterBtn = ({ title, icon }) => {
  return (
    <>
      <Button
        variant="contained"
        startIcon={icon}
        sx={{
          borderRadius: 50,
          fontSize: "10px",
          padding: "3px 15px",
        }}
      >
        {title}
      </Button>
    </>
  );
};

export default marketFilterBtn;
