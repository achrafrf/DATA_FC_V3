import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images-na.ssl-images-amazon.com',
      'res.cloudinary.com',
      'picsum.photos',
      'pagedone.io',
      'image.freepik.com',
      'i.pinimg.com',
      'i.ibb.co'
    ],
  },
};

export default nextConfig;
