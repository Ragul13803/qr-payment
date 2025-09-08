import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom'; // Outlet is used for nested routes
import { useState } from 'react';
import LeftMenuBar from './leftMenuBar';
import TopBar from './topBar';

const Layout = () => {
  const [expanded, setExpanded] = useState(true); // Sidebar state (expanded or minimized)

  // Calculate dynamic drawer width based on expanded state
  const drawerWidth = expanded ? 220 : 50;

  return (
    <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh',  }}>
      <TopBar />
      {/* Left Sidebar */}
      <LeftMenuBar expanded={expanded} setExpanded={setExpanded} />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, // Take remaining space after sidebar
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          transition: 'margin-left 0.3s ease', // Smooth transition for margin change
          height: '100vh',
          width: `calc(100vw - ${drawerWidth}px)`, // Dynamically calculate width based on drawerWidth
        }}
      >
        {/* Nested route content */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
