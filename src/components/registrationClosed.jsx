import React from 'react';
import EmailForm from './emailForm';
import { Box, Typography } from '@mui/material';

const RegistrationClosed = () => {
  return (
    <Box sx={{pt: "5rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Typography>Registration is currently closed.</Typography>
      <EmailForm />
    </Box>
  );
}

export default RegistrationClosed;
