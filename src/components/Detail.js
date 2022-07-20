import React from 'react';
import { Button, Typography, Stack } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row', alignItems: 'center' },
        marginTop: '3rem',
        padding: { lg: '1rem', xs: '2rem' },
      }}
    >
      <img src={gifUrl} loading="lazy" alt={name} className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercise keep you strong. {name} is one of the best exercise to target your {target}. It
          will help you to improve your mood and gain energy.
        </Typography>
        {extraDetail?.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            >
              <img src={item?.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>

            <Typography variant="h5" textTransform="capitalize">
              {item?.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
