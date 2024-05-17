import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Settings from '@/src/components/header/settings';
import ButtonCart from '@/src/components/header/button-cart';

export default function Header() {
  return (
    <AppBar sx={{
      marginBottom: {
        xs: '16px',
        md: '24px'
      }
    }} position="sticky">
      <Toolbar sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link style={{ textDecoration: 'none' }} title="Home" href="/">
          <Typography textTransform="uppercase" color="white" variant="h5">
            Home
          </Typography>
        </Link>
        <Box display="flex" gap="16px">
          <ButtonCart />
          <Settings />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
