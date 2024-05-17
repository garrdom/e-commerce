'use client';
import { useRouter } from 'next/navigation';
import { Badge, IconButton } from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '@/src/contexts/cart-context';

export default function ButtonCart() {
  const { push } = useRouter();
  const { products } = useCartContext();
  const productsLength = products.length;

  const onClick = () => {
    push('/cart');
  };

  return (
    <IconButton
      size="medium"
      edge="start"
      color="inherit"
      aria-label="cart"
      onClick={onClick}
    >
      <Badge badgeContent={productsLength} color="error">
        <CartIcon />
      </Badge>
    </IconButton>
  );
}
