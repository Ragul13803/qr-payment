import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({name}: any) => {
  return (
    <>
    <Button 
      variant="contained" 
      fullWidth 
      sx={{ textTransform: 'none', backgroundColor: '#42794A', borderRadius: '12px', color: '#FFFFFF', padding: '6px 20px', margin: '30px 10px 10px 10px', fontSize: '16px', fontFamily: 'Gilroy, sans-serif',}}>
      {name}
    </Button>
    </>
  )
}

export default CustomButton