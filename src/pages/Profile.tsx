// profile.jsx
import React from "react";
import { Box, Button, Card, CardContent, Typography, Grid } from "@mui/material";
import user from '../assets/bill-payment- 2.png'
import profileLogo from '../assets/profileBanner.png'
import AccountBalanceIcon from '../assets/Bank.png';
import BusinessCenterIcon from '../assets/briefcase-job-suitcase-svgrepo-com 1.png';
import KYCIcon from '../assets/id-card-svgrepo-com (1) 1.png';
import PurchaseIcon from '../assets/cart-large-svgrepo-com 1.png';

const Profile = () => {
  return (
    <Box className="py-12">
      {/* Top Banner */}
      <Box
        sx={{
          backgroundColor: "#42794A",
          borderRadius: "12px",
          margin: "0 16px 24px 16px",
          padding: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" color="#FFFFFF" fontFamily="Gilroy, sans-serif">
            Pay ₹1/month* for the <strong>QPay<br /> POS Device</strong>
          </Typography>
          <Typography variant="body2" sx={{ marginY: 1 }} fontFamily="Gilroy, sans-serif" color="#FFFFFF">
            One device for accepting all modes of payments
          </Typography>
          <Button
            variant="contained"
            size="small"
            style={{ textTransform: 'none', color: '#42794A', borderRadius: '8px', backgroundColor: '#FFFFFF', padding: '6px 20px', marginTop: '8px' }}
          >
            Download App Now!
          </Button>
        </Box>
        <img src={profileLogo} alt="Promo" style={{ borderRadius: '8px', width: 240, height: 180, marginRight: 100 }} />
      </Box>

      {/* Grid of Main Cards */}
      <Grid container spacing={2} sx={{ paddingX: 2, marginBottom: 2, width: '100%' }}>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                border: "1px solid #d9d9d9",
                borderRadius: "12px",
                padding: 2,
                textAlign: "center",
                height: '140px',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backgroundColor: '#EEF8F2'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, backgroundColor:'#42794A', height: '60px', width: '60px', borderRadius: '50%', alignItems: 'center', }}>
                {/* Render images using <img /> tag */}
                <img src={item.icon} alt={item.title} style={{ width: '30px', height: '30px' }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" color="#42794A">
                {item.title}
              </Typography>
              <Typography variant="h5" color="text.secondary" fontFamily="Gilroy, sans-serif">
                {item.subtitle}
              </Typography>
            </Box>
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
    icon: AccountBalanceIcon,  // This should now reference the image file
  },
  {
    title: "Business Profile",
    subtitle: "View and edit your business details",
    icon: BusinessCenterIcon,
  },
  {
    title: "KYC Verification",
    subtitle: "Unlock exclusive benefits with KYC",
    icon: KYCIcon,
  },
  {
    title: "Order QR",
    subtitle: "Get paid, manage & order QRs",
    icon: PurchaseIcon,
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
