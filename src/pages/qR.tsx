import { Box, Typography, Grid, Card, Button, Divider, Tabs, Tab, List, ListItem, ListItemAvatar,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useState } from "react";
import qrImage from "../assets/QR.png";
import logo from "../assets/logo.png";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CustomButton from "../components/CustomButton";
const ManageQR = () => {
  
  const qRTabs = ['Active QR Codes', 'QR Code Requests']
  const [qRTabValue, setQRTabValue] = useState<string>(qRTabs[0]);


  const handleTabChange = (event: any, newValue: any) => {
    console.log(event)
    setQRTabValue(newValue);
  };

  const qrItems = [1, 2, 3, 4]; // Mock data

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3} fontFamily={'Gilroy-Bold, sans-serif'}>
        Manage QR/POS
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side: QR Card */}
        <Grid item xs={12} sm={6} md={6}>
          <Card variant="outlined" 
            sx={{ 
              p: 3, 
              textAlign: "center", 
              width: '634px', 
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              height: '650px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}>
                <img src={logo} alt="QR Code" style={{ width: "72px", height: "62px", marginBottom: 16 }} />
                <img src={qrImage} alt="QR Code" style={{ width: "426px", height: "426px", marginBottom: 16 }}
            />
            <Typography variant="h5" color="#252525" fontFamily={'Gilroy-Bold, sans-serif'} fontWeight={'bold'}>
              UPI ID: 9876543210@qpay
            </Typography>
            <Typography variant="body1" color="#999999" fontFamily={'Gilroy, sans-serif'}>Ibrahim Mohammedali</Typography>

            <Box mt={3} display="flex" justifyContent="center" gap={2}>
              <Button variant="contained" startIcon={<FileDownloadOutlinedIcon />} sx={{ color: '#252525', backgroundColor: '#EEEEEE', textTransform: 'none', fontFamily: 'Gilroy, sans-serif', height: '40px', width: '150px', fontSize: '16px', }}>
                Download
              </Button>
              <Button variant="contained" startIcon={<ShareOutlinedIcon />} sx={{ color: '#252525', backgroundColor: '#EEEEEE', textTransform: 'none', fontFamily: 'Gilroy, sans-serif', height: '40px', width: '150px', fontSize: '16px', }}>
                Share
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* Right Side: QR List and Actions */}
        <Grid item xs={12} sm={6} md={6}>
  <Box sx={{ border: "1px solid #d9d9d9", borderRadius: "12px",  p: 3, }}>
    <Tabs
      value={qRTabValue}
      onChange={handleTabChange}
      variant="fullWidth"
      sx={{
        border: '1px solid #42794A',
        borderRadius: '8px',
        margin: '4px',
        display: 'flex',
        width: '500px',
        "& .MuiTab-root": {
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          borderRadius: '6px',
          margin: '4px',
          flex: 1, // Ensures equal width for each tab;
        },
        "& .Mui-selected": {
          backgroundColor: "#42794A",
          // padding: '10px 30px',
          color: '#FFFFFF',
          "&:hover": {
            backgroundColor: '#42794A',
            color: '#FFFFFF',
          },
        },
        "&.MuiTabs-root": {
          display: 'flex',
          minHeight: '0px !important',
          alignItems: 'center',
        },
        "& .MuiTabs-indicator": {
          display: 'none !important',
        },
      }}
    >
      {qRTabs.map((tab, index) => (<Tab key={index} value={tab}
        label={tab}
        disableRipple
        sx={{
          display: 'flex',
          alignContent: 'center',
          '&:hover': { background: '', },
          '&:active': { background: '', },  
        }}
      />))}
      
    </Tabs>

    {qRTabValue === 'Active QR Codes' && <Box>
      <List>
        {qrItems.map((index) => (
          <>
            <ListItem key={index} sx={{ px: 0, display: 'flex', justifyContent: 'space-between' }}>
              
              <Box sx={{ display: 'flex', }}>
                <ListItemAvatar>
               <Box sx={{ height: 96, width: 96, border: '1px solid #d9d9d9', borderRadius: '10px', display: 'flex',justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                <img src={qrImage} height={80} width={80}/>

               </Box>
              </ListItemAvatar>
              <Box>
              <Typography fontFamily={'Gilroy-Bold, sans-serif'} color="#252525" variant="h6">Q201946579</Typography>
              <Typography fontFamily={'Gilroy, sans-serif'} color="#252525" variant="subtitle1">All Marketing Sales - <br />MS/903041533364980231</Typography>
              <Typography fontFamily={'Gilroy, sans-serif'} color="#999999" variant="subtitle1">Terminal {index + 1}</Typography>
              </Box>
              </Box>
              <ArrowForwardIosIcon sx={{ color: '#999999'}} />

            </ListItem>
            <Divider sx={{ my: 1 }} />
          </>
        ))}
      </List>
    </Box>}

    {qRTabValue === 'QR Code Requests' && <Box>
      <List>
        {qrItems.map((index) => (
          <>
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemAvatar>
               <Box sx={{ height: 96, width: 96, border: '1px solid #d9d9d9', borderRadius: '10px', display: 'flex',justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                <img src={qrImage} height={80} width={80}/>

               </Box>
              </ListItemAvatar>
              <Box>
              <Typography fontFamily={'Gilroy-Bold, sans-serif'} color="#252525" variant="h6">All Marketing Sales</Typography>
              <Typography fontFamily={'Gilroy, sans-serif'} color="#252525" variant="subtitle1">45, Bharathi Nagar, VOC Port Authority, <br/>Tuticorin, 628004.</Typography>
              <Typography fontFamily={'Gilroy, sans-serif'} color="#999999" variant="subtitle1">Requested on 26.04.202</Typography>
              <Box sx={{ height: '56px', width: '200px', backgroundColor: '#EEF8F2'}}>
                <Typography fontFamily={'Gilroy-Bold, sans-serif'} color="#42794A">QR Request Accepted</Typography>
              </Box>
              </Box>
            </ListItem>
            <Divider sx={{ my: 1 }} />
          </>
        ))}
      </List>
      
      </Box>}

      <CustomButton name="Request more QR Codes" />
  </Box>
</Grid>

      </Grid>
    </Box>
  );
};

export default ManageQR;
