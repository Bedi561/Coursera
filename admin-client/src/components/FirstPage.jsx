import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const FirstPageAppbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Typography variant="h4" color="primary">
        COURSERA
      </Typography>
    </Box>
  );
};

export const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <FirstPageAppbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          margin: 'auto',
          padding: '20px',
        }}
      >
        <Stack spacing={2} direction="row">
          <CustomButton component={RouterLink} to="/admin/me" variant="contained">
            ADMIN
          </CustomButton>
          <CustomButton component={RouterLink} to="/user/me1" variant="contained"  target="_blank">
            USER
          </CustomButton>
        </Stack>
      </Box>
    </>
  );
};

const CustomButton = styled(Button)(({ theme }) => ({
  width: '300px',
  height: '200px',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&:hover': {
    border: `4px solid ${theme.palette.primary.main}`,
    boxShadow: `0 0 20px ${theme.palette.primary.main}`,
  },
}));
