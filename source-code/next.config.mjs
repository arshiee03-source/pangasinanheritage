/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static export -> deployable to any static host / CDN
  images: { unoptimized: true }, // required for static export
  trailingSlash: true,
};
export default nextConfig;
