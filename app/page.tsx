import { Grid } from '@mui/material';
import { ResponseObj, ResponseProduct } from '@/src/typings';
import ProductCard from '@/src/components/product-card';

// --------------------------------------------------------------------

export const revalidate = 600;

async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=10');

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}

// --------------------------------------------------------------------

export default async function HomePage() {
  const data: ResponseObj = await fetchProducts();

  if (!data) {
    throw new Error('Error loading products');
  }

  const products = data.products;

  const renderCard = (product: ResponseProduct) => {
    const { id, thumbnail, title, price } = product;

    return (
    <ProductCard
        key={id}
        id={id}
        thumbnail={thumbnail}
        title={title}
        price={price}
      />
    );
  };

  return (
    <Grid display="grid" gridTemplateColumns={{
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)'
    }} gap="10px">
      {products.map(renderCard)}
    </Grid>
  );
}
