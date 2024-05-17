import { Fragment } from 'react';
import Image from 'next/image';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useCartContext } from '@/src/contexts/cart-context';
import { CustomProduct } from '@/src/typings';

export default function Item(props: CustomProduct) {
  const { id, thumbnail, title, price } = props;
  const { inCart, handleToggleCart } = useCartContext();

  const currency = `€${price}`;

  const isIncart = inCart(id);

  const onClick = () => {
    const product: CustomProduct = {
      id,
      thumbnail,
      title,
      price
    };

    handleToggleCart(isIncart, product);
  };


  return (
    <Fragment>
      <Box display="flex" gap="10px" justifyContent="space-between">
        <Image src={thumbnail} alt="thumbnail" width={80} height={80} style={{ objectFit: 'cover', borderRadius: '8px' }} />
        <Grid display="grid" gridTemplateColumns="repeat(2, auto)" width="100%">
          <Typography component="p" variant="body1">{title}</Typography>
          <Typography justifySelf="flex-end" component="p" variant="subtitle1">{currency}</Typography>
          <Typography alignSelf="flex-end" component="p" variant="body2" color="text.secondary">Qty 1</Typography>
          <Button onClick={onClick} size="small" variant="text" sx={{
            height: 'fit-content',
            padding: 0,
            alignSelf: 'flex-end',
            justifySelf: 'flex-end'
          }}>Remove</Button>
        </Grid>
      </Box>
      <Divider sx={{ marginY: '15px' }} />
    </Fragment>
  );
}
