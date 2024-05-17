import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Container, Typography } from '@mui/material';
import ArrowIcon from '@mui/icons-material/ArrowRightAlt';

export default function Wrapper(props: PropsWithChildren) {
  const children = props.children;

  return (
    <Container maxWidth="xs">
      {children}
      <Link title="Home" href="/" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        textDecoration: 'none'
      }}>
        <Typography component="p" variant="body2" color="blue">
          Continue Shopping
        </Typography>
        <ArrowIcon sx={{
          color: 'blue'
        }} />
      </Link>
    </Container>
  );
}
