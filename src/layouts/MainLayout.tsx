import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"; // Outlet is used for nested routes
// import { useState } from "react";
import LeftMenuBar from "./leftMenuBar";
import TopBar from "./topBar";

const Layout = () => {
  // const [expanded, setExpanded] = useState(true); // Sidebar state (expanded or minimized)

  // Calculate dynamic drawer width based on expanded state
  // const drawerWidth = expanded ? 220 : 50;

  return (
    <Box sx={{ display: "flex", position: "relative", minHeight: "88vh" }}>
      <TopBar />
      {/* Left Sidebar */}
      <LeftMenuBar />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Take remaining space after sidebar
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
          transition: "margin-left 0.3s ease", // Smooth transition for margin change
          height: "88vhvh",
          // width: `calc(100vw - ${drawerWidth}px)`, // Dynamically calculate width based on drawerWidth
          margin: "130px 0 0 0px",
        }}
      >
        {/* Nested route content */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
