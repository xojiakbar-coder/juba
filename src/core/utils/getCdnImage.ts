const getCdnImage = (originalUrl: string, width = 1024, quality = 80) => {
  const cdnBase = import.meta.env.VITE_IMAGE_CDN_BASE;

  if (!originalUrl) return '';
  if (!cdnBase) return originalUrl;

  const encodedUrl = encodeURIComponent(originalUrl);
  return `${cdnBase}${encodedUrl}?tr=w-${width},q-${quality},f-auto`;
};

export default getCdnImage;
