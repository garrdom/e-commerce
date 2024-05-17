import { Grid, Container, Skeleton, Divider, Box } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="xs">
      <Box display="flex" gap="10px" justifyContent="space-between">
        <Skeleton width={80} height={80} animation="wave" variant="rectangular" sx={{
          borderRadius: '8px',
          flexShrink: 0
        }} />
        <Grid display="grid" gridTemplateColumns="repeat(2, auto)" width="100%">
          <Skeleton width="100%" animation="wave" variant="rectangular" />
          <Skeleton width="50%" animation="wave" variant="rectangular" sx={{
            justifySelf: 'flex-end'
          }} />
          <Skeleton width="50%" animation="wave" variant="rectangular" sx={{
            alignSelf: 'flex-end'
          }} />
          <Skeleton width="50%" animation="wave" variant="rectangular" sx={{
            alignSelf: 'flex-end',
            justifySelf: 'flex-end'
          }} />
        </Grid>
      </Box>
      <Divider sx={{ marginY: '15px' }} />
      <Skeleton height={36} animation="wave" variant="rectangular" />
    </Container>
  );
}
