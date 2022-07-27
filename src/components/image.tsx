import Image from 'next/image';
import styles from '@/styles/image.module.css';
import { useState } from 'react';
import cn from 'classnames';
import { ImageProps } from 'next/future/image';

export default function BlurredImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      {...props}
      alt={props.alt}
      width={672}
      height={320}
      className={cn(
        styles['image-transition'],
        isLoading ? styles['image-loading'] : styles['image-loaded'],
        'rounded-lg'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
