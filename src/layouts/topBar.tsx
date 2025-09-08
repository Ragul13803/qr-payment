import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import logo from "../assets/logo.png";
import profile from "../assets/62fe5054799f6c54e9dd546c_facetune-linkedin-img5 1.png";

const TopBar = () => {
  return (
    <Box
      sx={{
        height: "88px",
        backgroundColor: "#FFFFFF",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3, // padding left/right
      }}
    >
      {/* Left: Logo */}
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
        <img src={logo} alt="Logo" style={{ height: "36px" }} />
      </Box>

      {/* Right: User Profile */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src={profile} alt="profile" sx={{ width: 36, height: 36 }} />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "#999999" }}>
            Hello
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 500, color: "#000000DE" }}>
            Thomas Shelby
           <KeyboardArrowDownOutlinedIcon sx={{ color: "#555", margin: '0px 0px 0px 10px' }} />
          </Typography>
        </Box>
        <KeyboardArrowDownOutlinedIcon sx={{ color: "#555" }} />
      </Box>
    </Box>
  );
};

export default TopBar;
