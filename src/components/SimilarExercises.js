import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

function SimilarExercises({ targetMuscleExercise, equipmentMuscleExercise }) {
  console.log('targetMuscleExercise', targetMuscleExercise);
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '0' } }}>
      <Typography variant="h3" mb={5}>
        Exercise that target same muscle group
      </Typography>
      <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercise?.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
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
