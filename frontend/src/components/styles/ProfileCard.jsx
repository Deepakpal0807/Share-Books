import React from 'react';
import { Typography, Box } from '@mui/material';

const ProfileCard = ({ text, heading, Icon, sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: 1,
        ...sx // Apply custom styles here
      }}
    >
      {Icon && (
        <Box sx={{ mr: 2 }}>
          {React.cloneElement(Icon, { fontSize: 'large' })}
        </Box>
      )}
      <Box>
        {heading && (
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', marginBottom: '8px', ...sx }}
          >
            {heading}
          </Typography>
        )}
        <Typography
          variant="body1"
          sx={{ ...sx }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
