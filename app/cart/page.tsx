import { Suspense } from 'react';
import Cart from '@/src/components/cart';
import Loading from '@/app/cart/loading';

export default function CartPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Cart />
    </Suspense>
  );
}
