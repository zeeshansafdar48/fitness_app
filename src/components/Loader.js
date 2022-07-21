import React from 'react';
import { Stack } from '@mui/material';

function Loader() {
  return (
    <Stack direction="row" justifyContent={'center'} alignItems="center" width="100%">
      <div class="loader"></div>
    </Stack>
  );
}

export default Loader;
