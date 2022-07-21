import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import Logo from '../assets/images/fitnfit.png';

function Footer() {
  return (
    <Box mt="80px" bgColor="##fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" style={{ width: '200px', height: '105px' }} />
        <Typography variant="h5" pb="40px">
          Made with Honour by Zeeshan Safdar
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
