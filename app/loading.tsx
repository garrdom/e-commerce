import { Card, CardContent, Grid, Skeleton } from '@mui/material';

export default function Loading() {
  const renderCard = (_: any, i: number) => {
    return (
      <Card key={i}>
        <Skeleton height={200} animation="wave" variant="rectangular" />
        <CardContent sx={{
          position: 'relative'
        }}>
          <Skeleton animation="wave" height={32} width="80%" />
          <Skeleton animation="wave" height={20} width="30%" />
          <Skeleton sx={{
            position: 'absolute',
            bottom: '5px',
            right: '5px'
          }} animation="wave" variant="circular" height={40} width={40} />
        </CardContent>
      </Card>
    );
  };

  return (
    <Grid display="grid" gridTemplateColumns={{
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)'
    }} gap="10px">
      {Array.from(new Array(8)).map(renderCard)}
    </Grid>
  );
}
