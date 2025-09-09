// profile.jsx
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
// import "./profile.css"; // Import your CSS

const Profile = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 1200, margin: "0 auto" }}>
      {/* Top Banner */}
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#e6f4ea",
          padding: 2,
          marginBottom: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: "#2e7d32", fontWeight: 600 }}>
            Pay ₹1/month* for the QPay POS Device
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 0.5 }}>
            One device for accepting all modes of payments
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ marginTop: 2, backgroundColor: "#2e7d32" }}
          >
            Download App Now
          </Button>
        </Box>
        <Box className="banner-image" />
      </Card>

      {/* Grid of Main Cards */}
      <Grid container spacing={2} marginBottom={3}>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Grid of Functional Buttons */}
      <Grid container spacing={2}>
        {serviceData.map((service, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Card variant="outlined" sx={{ textAlign: "center", padding: 2 }}>
              <Typography variant="h4" component="div">
                {service.icon}
              </Typography>
              <Typography variant="body2">{service.label}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Card Data
const cardData = [
  {
    title: "XXXX 9820",
    subtitle: "ICICI Bank | Chennai Egmore Branch",
  },
  {
    title: "Business Profile",
    subtitle: "View and edit your business details",
  },
  {
    title: "KYC Verification",
    subtitle: "Unlock exclusive benefits with KYC",
  },
  {
    title: "Order QR",
    subtitle: "Get paid, manage & order QRs",
  },
];

// Services Data
const serviceData = [
  { icon: "📢", label: "Smart Speaker" },
  { icon: "💳", label: "POS Machine" },
  { icon: "⚙️", label: "Payment Settings" },
  { icon: "👥", label: "Manage Staff" },
  { icon: "🌐", label: "Change Language" },
];

export default Profile;
