'use client';
import { useRouter } from 'next/navigation'
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import AddCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useCartContext } from '@/src/contexts/cart-context';
import type { CustomProduct } from '@/src/typings';

export default function ProductCard(props: CustomProduct) {
  const { id, thumbnail, title, price } = props;
  const { push } = useRouter();
  const { inCart, handleToggleCart } = useCartContext();

  const isInCart = inCart(id);

  const currency = `€${price}`;

  const onRedirect = () => {
    push(`${id}`);
  };

  const onToggleCart = () => {
    const product: CustomProduct = {
      id,
      thumbnail,
      title,
      price
    };

    handleToggleCart(isInCart, product);
  };

  const Icon = isInCart ? RemoveCartIcon : AddCartIcon;
  const label = isInCart ? 'Remove from cart' : 'Add to cart';

  return (
    <Card>
      <CardActionArea onClick={onRedirect}>
        <CardMedia
          component="img"
          height="200"
          image={thumbnail}
          alt="thumb"
          loading="lazy"
        />
      </CardActionArea>
      <CardContent sx={{
        position: 'relative'
      }}>
        <Typography component="p" variant="body1">
          {title}
        </Typography>
        <Typography component="p" variant="body2" color="text.secondary">
          {currency}
        </Typography>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label={label}
          onClick={onToggleCart}
          sx={{
            position: 'absolute',
            bottom: '5px',
            right: '5px'
          }}>
          <Icon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
