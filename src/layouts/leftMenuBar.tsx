import {
  Box,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Collapse,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

// Image Assets
import homeIcon from '../assets/menu/B mnemonic_SVG 2.png';
import QR from '../assets/menu/customer-service-help-svgrepo-com 3.png';
import historyIcon from '../assets/menu/history.png';
import profileIcon from '../assets/menu/profile.png';

const drawerItems = [
  { text: "Home", icon: <img src={homeIcon} alt="Home" style={{ width: 22, height: 22 }} />, route: "/home" },
  { text: "QR", icon: <img src={QR} alt="QR" style={{ width: 22, height: 22 }} />, route: "/manageQR" },
  {
    text: "History",
    icon: <img src={historyIcon} alt="History" style={{ width: 22, height: 22 }} />,
    subItems: [
      {
        text: "Transaction History",
        route: "/transactions",
        icon: <img src={historyIcon} alt="Transaction History" style={{ width: 18, height: 18 }} />
      },
      {
        text: "Settlement History",
        route: "/settlements",
        icon: <img src={historyIcon} alt="Settlement History" style={{ width: 18, height: 18 }} />
      },
    ],
  },
  { text: "Profile", icon: <img src={profileIcon} alt="Profile" style={{ width: 22, height: 22 }} />, route: "/profile" },
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
      <Box
        sx={{
          width: expanded ? "240px" : "50px",
          height: "80vh",
          backgroundColor: "#42794A",
          boxSizing: "border-box",
          marginTop: "88px",
          transition: "width 0.3s ease",
          overflow: "hidden",
          borderRight: "1px solid rgba(0,0,0,0.1)",
          margin: '80px 0 0 40px',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Menu List */}
        <List sx={{ p: "0 14px", mt: "20px" }}>
          {drawerItems.map((item, index) => {
            const isActive =
              location.pathname === item.route ||
              (item.subItems &&
                item.subItems.some((sub) => location.pathname === sub.route));

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

            return (
              <ListItem
                key={index}
                onClick={() => handleNavigation(item.route!)}
                sx={{
                  cursor: "pointer",
                  bgcolor: isActive ? "#FFFFFF" : "transparent",
                  color: isActive ? "#42794A" : "#94CA9C",
                  borderRadius: "12px",
                  padding: "16 20px",
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

        {/* Bottom Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '10px', margin: '2px', borderRadius: '0px  0px 12px 12px' }}>
          <img src={homeIcon} alt="Home" style={{ width: 40, height: 40 }} />
          <Typography style={{ fontWeight: 'bold', color: '#F267270',}}>Bharat <br />Connect</Typography>
        </Box>
      </Box>

    </>
  );
};

export default LeftMenuBar;
