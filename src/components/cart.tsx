'use client';
import { Button, Grid, Typography } from '@mui/material';
import { CustomProduct } from '@/src/typings';
import { useCartContext } from '@/src/contexts/cart-context';
import Wrapper from '@/src/components/cart/wrapper';
import Item from '@/src/components/cart/item';

export default function Cart() {
  const { products } =  useCartContext();

  if (products.length === 0) {
    return (
      <Wrapper>
        <Typography variant="h4" textAlign="center">The cart is empty</Typography>
      </Wrapper>
    );
  }

  const renderItem = (product: CustomProduct) => {
    const { id, thumbnail, title, price } = product;

    return (
      <Item key={id} id={id} thumbnail={thumbnail} title={title} price={price} />
    );
  };

  const getSubtotal = () => {
    return products.reduce((acc: number, product: CustomProduct) => acc + product.price, 0);
  };

  const currency = `€${getSubtotal()}`;
  return (
    <Wrapper>
      {products.map(renderItem)}
      <Grid display="grid" gridTemplateAreas="'label price' 'sublabel sublabel'" paddingX="15px" marginBottom="15px">
        <Typography component="p" variant="body1" gridArea="label">Subtotal</Typography>
        <Typography component="p" variant="body1" gridArea="price" justifySelf="flex-end">{currency}</Typography>
        <Typography component="p" variant="body2" color="text.secondary" gridArea="sublabel">
          Shipping and taxes calculated at checkout.
        </Typography>
      </Grid>
      <Button variant="contained" sx={{
        width: 'calc(100% - 30px)',
        display: 'flex',
        margin: '0 auto 20px'
      }}>Checkout</Button>
    </Wrapper>
  )
}
