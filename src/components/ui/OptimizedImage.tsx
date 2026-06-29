import NextImage, { type ImageProps } from "next/image";

function isSvgSrc(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false;
  return src.endsWith(".svg");
}

/** Drop-in Image replacement — local SVGs must bypass the optimizer. */
export function OptimizedImage({ src, unoptimized, ...props }: ImageProps) {
  return <NextImage src={src} unoptimized={unoptimized ?? isSvgSrc(src)} {...props} />;
}
