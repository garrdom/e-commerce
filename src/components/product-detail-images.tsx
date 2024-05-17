import Image from 'next/image';
import { ImageList, ImageListItem } from '@mui/material';
import type { ResponseProduct } from '@/src/typings';

// --------------------------------------------------------------------

type Props = Pick<ResponseProduct, 'images'>;

// --------------------------------------------------------------------

export default function Images(props: Props) {
  const images = props.images;

  const renderImage = (src: string, i: number) => {
    return (
      <ImageListItem key={i} sx={{
        height: '100% !important',
      }}>
        <Image
          src={src}
          alt='image'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          loading="lazy" />
      </ImageListItem>
    );
  };

  return (
    <ImageList gap={10} sx={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr)) !important',
      margin: {
        xs: '0 0 15px',
        sm: 0
      },
      maxWidth: '650px',
      flex: 1
    }}>
      {images.map(renderImage)}
    </ImageList>
  );
}
