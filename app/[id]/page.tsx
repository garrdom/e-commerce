import { notFound } from 'next/navigation';
import { Grid } from '@mui/material';
import type { ResponseObj, ResponseProduct } from '@/src/typings';
import Images from '@/src/components/product-detail-images';
import Content from '@/src/components/product-detail-content';

// --------------------------------------------------------------------

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

export const revalidate = 600;

export async function generateStaticParams(): Promise<Array<Params>> {
  const data: ResponseObj = await fetch('https://dummyjson.com/products?limit=10').then((res) => res.json());

  return data.products.map((product) => ({
    id: `${product.id}`
  }));
}

async function fetchProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }

    return undefined;
  }

  return res.json();
}

// --------------------------------------------------------------------

export default async function DetailPage(props: Props) {
  const product: ResponseProduct = await fetchProduct(props.params.id);

  if (!product) {
    throw new Error('Error loading product');
  }

  const { id, thumbnail, title, price, images, description, rating } = product;

  return (
    <Grid gap="15px" marginX="auto" sx={{
      display: {
        xs: 'block',
        sm: 'flex'
      },
      flexDirection: {
        xs: 'column',
        lg: 'row'
      },
      width: {
        xs: 'auto',
        sm: 'fit-content'
      }
    }}>
      <Images images={images} />
      <Content
        id={id}
        thumbnail={thumbnail}
        title={title}
        description={description}
        price={price} rating={rating} />
    </Grid>
  );
}
