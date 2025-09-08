import { Box, List, ListItem, ListItemText, Typography, Tooltip, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Collapse,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

import homeIcon from '../assets/menu/B mnemonic_SVG 2.png';
import QR from '../assets/menu/customer-service-help-svgrepo-com 3.png';
import historyIcon from '../assets/menu/history.png';
import profileIcon from '../assets/menu/profile.png';


const drawerItems = [
  { text: "Home", icon: <DashboardIcon />, route: "/dashboard" },
  { text: "QR", icon: <SettingsRoundedIcon />, route: "/settings" },
  {
    text: "History",
    icon: <CategoryIcon />,
    subItems: [
      { text: "Transaction History", route: "/transactions" },
      { text: "Settlement History", route: "/settlements" },
    ],
  },
  { text: "Profile", icon: <ExitToAppIcon />, route: "/login" },
];

interface LeftMenuBarProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftMenuBar = ({ expanded, setExpanded }: LeftMenuBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [DialogOpen, setDialogOpen] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  const handleNavigation = (route: string) => {
    if (route === "/login") {
      setDialogOpen(true);
    } else {
      navigate(route);
    }
  };

  const handleLogoutCancel = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {/* Sidebar using Box */}
      <Box
        sx={{
          width: expanded ? "240px" : "50px",
          height: "100vh",
          backgroundColor: "#42794A",
          boxSizing: "border-box",
          marginTop: "88px",
          transition: "width 0.3s ease",
          position: "fixed",
          left: 0,
          top: 0,
          overflow: "hidden",
          borderRight: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <List sx={{ p: "0 6px", mt: "20px" }}>
          {drawerItems.map((item, index) => {
            const isActive =
              location.pathname === item.route ||
              (item.subItems &&
                item.subItems.some((sub) => location.pathname === sub.route));

            // History item with submenu
            if (item.subItems) {
              return (
                <Box key={index}>
                  <ListItem
                    onClick={() => setOpenHistory(!openHistory)}
                    sx={{
                      cursor: "pointer",
                      bgcolor: isActive ? "#FFFFFF" : "transparent",
                      color: isActive ? "#42794A" : "#94CA9C",
                      borderRadius: "10px",
                      pl: expanded ? "10px" : "7px",
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {expanded ? (
                      <>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          {item.icon}
                          <ListItemText primary={item.text} />
                        </Box>
                        {openHistory ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </>
                    ) : (
                      <Tooltip title={item.text} placement="right" arrow>
                        <Box sx={{ display: "flex", alignItems: "center" }}>{item.icon}</Box>
                      </Tooltip>
                    )}
                  </ListItem>

                  {/* Submenu items */}
                  <Collapse in={openHistory && expanded} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 4 }}>
                      {item.subItems.map((sub, subIndex) => (
                        <ListItem
                          key={subIndex}
                          onClick={() => handleNavigation(sub.route)}
                          sx={{
                            cursor: "pointer",
                            bgcolor: location.pathname === sub.route ? "#FFFFFF" : "transparent",
                            color: location.pathname === sub.route ? "#42794A" : "#94CA9C",
                            borderRadius: "8px",
                            mb: 0.5,
                          }}
                        >
                          <ListItemText primary={sub.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            // Normal menu item
            return (
              <ListItem
                key={index}
                onClick={() => handleNavigation(item.route!)}
                sx={{
                  cursor: "pointer",
                  bgcolor: isActive ? "#FFFFFF" : "transparent",
                  color: isActive ? "#42794A" : "#94CA9C",
                  borderRadius: "10px",
                  pl: expanded ? "10px" : "7px",
                  mb: 1,
                }}
              >
                {!expanded && (
                  <Tooltip title={item.text} placement="right" arrow>
                    <Box sx={{ display: "flex", alignItems: "center" }}>{item.icon}</Box>
                  </Tooltip>
                )}
                {expanded && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {item.icon}
                    <ListItemText primary={item.text} />
                  </Box>
                )}
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Logout Dialog */}
      <Dialog
        open={DialogOpen}
        onClose={handleLogoutCancel}
        PaperProps={{ sx: { width: "300px", borderRadius: "10px" } }}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>Confirm Logout</DialogTitle>
        <DialogContent sx={{ padding: "14px 30px" }}>
          <Typography>Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions sx={{ gap: "4px" }}>
          <Button onClick={handleLogoutCancel} variant="outlined">
            No
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#5744E3",
              "&:hover": { backgroundColor: "#5744E3" },
            }}
            disabled={logoutLoading}
          >
            {logoutLoading ? (
              <CircularProgress size={20} sx={{ color: "white", mr: "10px" }} />
            ) : (
              ""
            )}
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LeftMenuBar;
