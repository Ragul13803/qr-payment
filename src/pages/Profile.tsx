import {
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";

import profileLogo from "../assets/profileBanner.png";
import AccountBalanceIcon from "../assets/Bank.png";
import BusinessCenterIcon from "../assets/briefcase-job-suitcase-svgrepo-com 1.png";
import KYCIcon from "../assets/id-card-svgrepo-com (1) 1.png";
import PurchaseIcon from "../assets/cart-large-svgrepo-com 1.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmartSpeaker from "../assets/Smart Speaker.png";
import POSMachine from "../assets/POS Machine.png";
import PaymentSettings from "../assets/Payment Settings.png";
import ManageStaff from "../assets/Manage Staff.png";
import ChangeLanguage from "../assets/Change Language.png";

const Profile = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#fff" }}>
      {/* Main content */}
      <Box sx={{ flex: 1, overflowY: "auto", px: 2, py: 3 }}>
        {/* Top Banner */}
        <Box
          sx={{
            bgcolor: "#42794A",
            borderRadius: "12px",
            mb: 4,
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            color: "#fff",
          }}
        >
          <Box sx={{ flex: 1, minWidth: 280 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontFamily="Gilroy, sans-serif"
              sx={{ mb: 1 }}
            >
              Pay ₹1/month* for the <br />
              <strong>QPay POS Device</strong>
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Gilroy, sans-serif"
              sx={{ mb: 1 }}
            >
              One device for accepting all modes of payments
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: "none",
                color: "#42794A",
                borderRadius: "8px",
                bgcolor: "#fff",
                px: 3,
                fontWeight: "bold",
              }}
            >
              Download App Now!
            </Button>
          </Box>
          <Box sx={{ ml: 5 }}>
            <img
              src={profileLogo}
              alt="Promo"
              style={{ borderRadius: 12, width: 240, height: 180 }}
            />
          </Box>
        </Box>

        {/* Card Grid */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
  {cardData.map((item, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <Box
        sx={{
          border: "1px solid #d9d9d9",
          borderRadius: "12px",
          padding: 3,
          height: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",  // Left align content
          textAlign: "left",
          cursor: "pointer",
          bgcolor: "#EEF8F2",
          position: "relative",   // For absolute arrow positioning
          "&:hover": { boxShadow: 3, bgcolor: "#f0f8f5" },
          backgroundColor: "#EEF8F2"
        }}
      >
        {/* Arrow icon top right */}
        <ArrowForwardIosIcon
          sx={{
            position: "absolute",
            top: 28,
            right: 28,
            color: "#42794A",
            fontSize: 20,
            fontWeight: "bold",
          }}
        />

        <Box
          sx={{
            bgcolor: "#42794A",
            width: 60,
            height: 60,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <img
            src={item.icon}
            alt={item.title}
            style={{ maxHeight: 42, maxWidth: 32 }}
          />
        </Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#42794A"
          gutterBottom
          fontFamily="Gilroy-Bold, sans-serif"
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          color="#999999"
          fontFamily="Gilroy, sans-serif"
        >
          {item.subtitle}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>


        {/* Services Grid */}
        <Grid container spacing={2} sx={{  marginBottom: 2, width: '100%' }}>
                {/* Profile Card */}
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    sx={{
                      border: "1px solid #d9d9d9",
                      borderRadius: "12px",
                      padding: 3,
                      width: '760px',
                      height: '310px',
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom color="#999999" fontFamily="Gilroy-Bold, sans-serif">
                      BUSINESS SERVICES
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 2 }}>
                    {businessServicesData.map(({ icon, label }, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1, flexDirection: 'column' , textAlign:'center'}}      >
                        <img src={icon} alt={label as any} style={{ width: 140, height: 140, marginRight: 8 }} />
                        <Typography fontFamily="Gilroy, sans-serif">{label}</Typography>
                      </Box>
                    ))}
                    </Box>

                      
            
                  </Box>
                </Grid>
        
                {/* QR Card */}
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      border: "1px solid #d9d9d9",
                      borderRadius: "12px",
                      padding: 3,
                      width: '760px',
                      height: '310px',
        
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom color="#999999" fontFamily="Gilroy-Bold, sans-serif">
                      MANAGE BUSINESS
                    </Typography>
                   <Box sx={{ display: 'flex', gap: 2 }}>
                    {manageBusinessData.map(({ icon, label }, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1, flexDirection: 'column', textAlign:'center' }}      >
                        <img src={icon} alt={label as any}  style={{ width: 140, height: 140, marginRight: 8 }} />
                        <Typography>{label}</Typography>
                      </Box>
                    ))}
                    </Box>
                 
                  </Box>
                </Grid>
              </Grid>
      </Box>
    </Box>
  );
};

const cardData = [
  {
    title: "XXXX 9820",
    subtitle: "ICICI Bank | Chennai Egmore Branch",
    icon: AccountBalanceIcon,
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

const businessServicesData = [
  { icon: SmartSpeaker, label: <>Smart<br />Speaker</> },
  { icon: POSMachine, label: <>POS<br />Machine</> },
];


const manageBusinessData = [
  { icon: PaymentSettings, label: <>Payment<br />Settings</> },
  { icon: ManageStaff, label: <>Manage<br />Staff</> },
  { icon: ChangeLanguage, label: <>Change<br />Language</> },
];

export default Profile;

