import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

// Sample QR image
const qrImage = "/path-to-your-qr-code-image.png"; // Replace this with your actual QR image path

const ManageQR = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  const qrItems = [1, 2, 3, 4]; // Mock data

  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Manage QR/POS
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side: QR Card */}
        <Grid item xs={12} md={5}>
          <Card variant="outlined" sx={{ p: 3, textAlign: "center" }}>
            <img
              src={qrImage}
              alt="QR Code"
              style={{ width: "180px", height: "180px", marginBottom: 16 }}
            />
            <Typography variant="body2" color="textSecondary">
              UPI ID: <strong>9876543210@qpay</strong>
            </Typography>
            <Typography variant="body2">Ibrahim Mohammedali</Typography>

            <Box mt={3} display="flex" justifyContent="center" gap={2}>
              <Button variant="outlined" startIcon={<DownloadIcon />}>
                Download
              </Button>
              <Button variant="contained" startIcon={<ShareIcon />}>
                Share
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Right Side: QR List and Actions */}
        <Grid item xs={12} md={7}>
          <Box>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Active QR Codes" />
              <Tab label="QR Code Requests" />
            </Tabs>

            <Divider sx={{ my: 2 }} />

            <Box>
              <List>
                {qrItems.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar variant="square" sx={{ bgcolor: "#eee" }}>
                        <QrCodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Q201946579"
                      secondary={
                        <>
                          All Marketing Sales - MS/903041533364980231
                          <br />
                          Terminal {index + 1}
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box mt={2}>
              <Button variant="contained" fullWidth color="success">
                Request more QR Codes
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManageQR;
