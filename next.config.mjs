/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Generate a static website in the "out" folder
  output: 'export',

  // Required if you're using next/image with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;