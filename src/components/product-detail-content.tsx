'use client';
import { Box, Divider, IconButton, Rating, Typography } from '@mui/material';
import AddCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCartIcon from '@mui/icons-material/RemoveShoppingCart';
import type { CustomProduct, ResponseProduct } from '@/src/typings';
import { useCartContext } from '@/src/contexts/cart-context';

// --------------------------------------------------------------------

type Props = CustomProduct & Pick<ResponseProduct, 'description' | 'rating'>;

// --------------------------------------------------------------------

export default function Content(props: Props) {
  const { id, thumbnail, title, description, price, rating } = props;
  const { inCart, handleToggleCart } = useCartContext();

  const isInCart = inCart(id);

  const onToggleCart = () => {
    const product: CustomProduct = {
      id,
      thumbnail,
      title,
      price
    };

    handleToggleCart(isInCart, product);
  };

  const currency = `€${price}`;

  const Icon = isInCart ? RemoveCartIcon : AddCartIcon;
  const label = isInCart ? 'Remove from cart' : 'Add to cart';

  return (
    <Box sx={{
      maxWidth: {
        xs: '100%',
        lg: '42%'
      }
    }}>
      <Typography gutterBottom variant="h5" component="p">{title}</Typography>
      <Typography component="p">{description}</Typography>
      <Divider variant="middle" sx={{ marginY: '15px' }} />
      <Typography variant="h6" component="p">{currency}</Typography>
      <Rating name="read-only" value={rating} precision={0.1} size="small" readOnly />
      <Box display="flex" alignItems="center" gap="5px" marginTop="10px">
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label={label}
          onClick={onToggleCart}>
          <Icon />
        </IconButton>
        <Typography>Add to cart</Typography>
      </Box>
    </Box>
  );
}
