import { Box, Button, Grid, Typography, CircularProgress } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import user from '../assets/bill-payment- 2.png'
import QR from '../assets/QR.png'

import Divider from '@mui/material/Divider';
import CustomButton from "../components/CustomButton";


export default function Home() {
  const stats = [
    { value: 1.5, type: "Account Holders" },
    { value: 2.1, type: "Transactions" },
    { value: 2.3, type: "Settlement" },
    { value: 45, type: "QR Orders" },
  ];

  return (
    <Box className="py-12" >
      {/* 🔹 Row 1: Promo Banner */}
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
        <img src={user} alt="Promo" style={{ borderRadius: '8px', width: 240, height: 180, marginRight: 100 }} />
      </Box>

      {/* 🔹 Row 2: Stats Grid */}
      <Grid container spacing={2} sx={{ paddingX: 2, marginBottom: 2, width: '100%' }}>
        {stats.map((item, index) => (
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
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
              <Typography variant="h6" fontWeight="bold" color="#42794A" fontSize="40px">
                {item.value}k
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Gilroy, sans-serif" fontSize="20px">
                {item.type}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 🔹 Row 3: Profile and QR Cards */}
      <Grid container spacing={2} sx={{ paddingX: 2, marginBottom: 2, width: '100%' }}>
        {/* Profile Card */}
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
              width: '634px',
              height: '310px',
            }}
          >
            <Typography variant="subtitle1" gutterBottom color="#999999">
              PROFILE
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', }}>

            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              {/* Background Progress Circle (Remaining Value) */}
              <CircularProgress
                variant="determinate"
                value={100} // Set to 100 for the full circle
                size={'184px'}
                sx={{
                  color: '#EEEEEE', // Set remaining value color to light gray
                }}
              />
              {/* Foreground Progress Circle (Actual Value - 30%) */}
              <CircularProgress
                variant="determinate"
                value={30}
                size={'184px'}
                sx={{
                  color: '#61CE70', // Set progress color
                   position: 'absolute', // Ensure it sits on top of the background circle
                  strokeLinecap: 'round', // Make the ends of the progress rounded
                }}
              />
              {/* Center Text */}
              <Typography
                fontWeight="medium"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)', 
                  color: '#61CE70', 
                  fontSize: '1.5rem', 
                }}
              >
                30%
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom fontFamily="Gilroy-Bold, sans-serif">Complete your profile</Typography>
              <Typography variant="subtitle1" color="#999999" fontFamily="Gilroy, sans-serif" marginLeft={'10px'}>• Personal KYC</Typography>
              <Typography variant="subtitle1" color="#999999" fontFamily="Gilroy, sans-serif" marginLeft={'10px'}>• Company KYC</Typography>
              <Typography variant="subtitle1" color="#999999" fontFamily="Gilroy, sans-serif" marginLeft={'10px'}>• Onboarding details</Typography>
            </Box>
            </Box>
            <CustomButton name='Next'  />
              
    
          </Box>
        </Grid>

        {/* QR Card */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
              width: '634px',
              height: '310px',

            }}
          >
            <Typography variant="subtitle1" gutterBottom color="#999999">
              QR
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', }}>
              <img  src={QR} style={{ width: '184px', height: '184px', background: "#ccc", marginBottom: 2 }} /> {/* QR Image Placeholder */}
            
              <Box>
                <Typography variant="h6" gutterBottom fontFamily="Gilroy-Bold, sans-serif">Order QR</Typography>
                <Typography variant="subtitle1" color="#999999" fontFamily="Gilroy, sans-serif" marginLeft={'10px'}>• Receive Payment</Typography>
                <Typography variant="subtitle1" color="#999999" fontFamily="Gilroy, sans-serif" marginLeft={'10px'}>• Order new QRs</Typography>
                <Typography variant="subtitle1" color="#999999" fontFamily="Gilroy, sans-serif" marginLeft={'10px'}>• Download QR</Typography>
              </Box>
            
            </Box>
            <CustomButton name='View more'  />
         
          </Box>
        </Grid>
      </Grid>

      {/* 🔹 Row 4: Settlement and Transactions Cards */}
      <Grid container spacing={2} sx={{ paddingX: 2, width: '100%' }}>
        {/* Settlement Card */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
              width: '634px',
              height: '340px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
            <Typography variant="subtitle1" gutterBottom color="#999999">
              SETTLEMENT
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" fontFamily="Gilroy, sans-serif">₹1,23,816.19</Typography>
            </Box>
            <ArrowForwardIosIcon/>
            </Box>
            <Divider />
             {[{name: "Ibrahim", date: '23 Oct, 09:15 AM'}, {name: "Ibrahim", date: '23 Oct, 09:15 AM'}, {name: "Ibrahim", date: '23 Oct, 09:15 AM'}].map((item, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Box>
                <Typography variant="h6" color="black" fontFamily="Gilroy, sans-serif">{item.name}</Typography>
                <Typography variant="h6" color="#999999" fontFamily="Gilroy, sans-serif">{item.date}</Typography>
                </Box>
                <Typography variant="h6" color="black" fontFamily="Gilroy, sans-serif">+₹90</Typography>
              </Box>
            ))}

            <CustomButton name='Settle Now'  />
           
          </Box>
        </Grid>

        {/* Total Transactions Card */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
              width: '634px',
              height: '340px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
              <Typography variant="subtitle1" gutterBottom color="#999999">
                TOTAL TRANSACTIONS
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" fontFamily="Gilroy, sans-serif">₹1,23,816.19</Typography>
              </Box>
              <ArrowForwardIosIcon/>
            </Box>
            <Divider />
            {[{name: "Ibrahim", date: '23 Oct, 09:15 AM'}, {name: "Ibrahim", date: '23 Oct, 09:15 AM'}, {name: "Ibrahim", date: '23 Oct, 09:15 AM'}].map((item, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Box>
                <Typography variant="h6" color="black" fontFamily="Gilroy, sans-serif">{item.name}</Typography>
                <Typography variant="h6" color="#999999" fontFamily="Gilroy, sans-serif">{item.date}</Typography>
                </Box>
                <Typography variant="h6" color="black" fontFamily="Gilroy, sans-serif">+₹90</Typography>
              </Box>
            ))}

            <CustomButton name='View All'  />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
