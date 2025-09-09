import { Box, Button, Grid, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const stats = [
    { value: 1.5, type: "Account Holders" },
    { value: 2.1, type: "Transactions" },
    { value: 2.3, type: "Settlement" },
    { value: 45, type: "QR Orders" },
  ];

  return (
    <Box className="py-12">
      {/* 🔹 Row 1: Promo Banner */}
      <Box
        sx={{
          backgroundColor: "#E5F7F1",
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
          <Typography variant="h6" fontWeight="bold" color="primary">
            Pay ₹1/month* for the QPay POS Device
          </Typography>
          <Typography variant="body2" sx={{ marginY: 1 }}>
            One device for accepting all modes of payments
          </Typography>
          <Button variant="contained" size="small">Download App Now</Button>
        </Box>
        {/* Placeholder for image */}
        <Box sx={{ width: 150, height: 100, background: "#ccc", borderRadius: 2 }} />
      </Box>

      {/* 🔹 Row 2: Stats Grid */}
      <Grid container spacing={2} sx={{ paddingX: 2, marginBottom: 2 }}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                border: "1px solid #d9d9d9",
                borderRadius: "12px",
                padding: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="primary">
                {item.value}k
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.type}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 🔹 Row 3: Profile and QR Cards */}
      <Grid container spacing={2} sx={{ paddingX: 2, marginBottom: 2 }}>
        {/* Profile Card */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Profile
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <CircularProgress variant="determinate" value={30} />
              <Typography fontWeight="medium">30%</Typography>
            </Box>
            <Typography variant="body2" gutterBottom>Complete your profile</Typography>
            <Typography variant="body2" color="text.secondary">• Personal KYC</Typography>
            <Typography variant="body2" color="text.secondary">• Company KYC</Typography>
            <Typography variant="body2" color="text.secondary">• Onboarding details</Typography>
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              Next
            </Button>
          </Box>
        </Grid>

        {/* QR Card */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              QR
            </Typography>
            <Box sx={{ width: 80, height: 80, background: "#ccc", marginBottom: 2 }} /> {/* QR Image Placeholder */}
            <Typography variant="body2" gutterBottom>Order QR</Typography>
            <Typography variant="body2" color="text.secondary">• Receive Payment</Typography>
            <Typography variant="body2" color="text.secondary">• Order new QRs</Typography>
            <Typography variant="body2" color="text.secondary">• Download QR</Typography>
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              View more
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* 🔹 Row 4: Settlement and Transactions Cards */}
      <Grid container spacing={2} sx={{ paddingX: 2 }}>
        {/* Settlement Card */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Settlement
            </Typography>
            <Typography variant="h6" fontWeight="bold">₹1,23,816.19</Typography>
            {["Ibrahim", "Ibrahim", "Ibrahim"].map((name, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Typography variant="body2" color="text.secondary">{name}</Typography>
                <Typography variant="body2" color="text.secondary">+₹90</Typography>
              </Box>
            ))}
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              Settle Now
            </Button>
          </Box>
        </Grid>

        {/* Total Transactions Card */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              padding: 3,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Total Transactions
            </Typography>
            <Typography variant="h6" fontWeight="bold">₹1,23,816.19</Typography>
            {["Ibrahim", "Ibrahim", "Ibrahim"].map((name, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Typography variant="body2" color="text.secondary">{name}</Typography>
                <Typography variant="body2" color="text.secondary">+₹90</Typography>
              </Box>
            ))}
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              View All
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
