import Image from 'next/image';

/** ATOM: Image. Always requires `alt`; lazy-loaded with fixed dimensions to prevent layout shift (CLS). */
export default function HeritageImage({ src, alt, width = 800, height = 500, priority = false }) {
  return (
    <Image src={src} alt={alt} width={width} height={height} priority={priority}
      sizes="(min-width: 64em) 33vw, (min-width: 40em) 50vw, 100vw"
      style={{ width: '100%', height: 'auto', aspectRatio: `${width} / ${height}`, objectFit: 'cover' }} />
  );
}
