import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className="py-12">
      <Box sx={{ height: '240px', margin: '20px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link to="/transactions">Go to Transactions</Link>
      </Box>
    </div>
  )
}