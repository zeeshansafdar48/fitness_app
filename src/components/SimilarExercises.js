import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

function SimilarExercises({ targetMuscleExercise, equipmentMuscleExercise }) {
  return (
    <Box sx={{ marginTop: { lg: '250px', xs: '20px' } }}>
      <Typography variant="h3" mt={6} mb={3} ml={'2.1rem'}>
        Exercise that target same muscle group
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercise?.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mt={6} mb={3} ml={'2.1rem'}>
        Exercise that use the same equipment
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        {equipmentMuscleExercise?.length ? (
          <HorizontalScrollBar data={equipmentMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
