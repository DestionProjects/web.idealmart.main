/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'imgix',  // Using imgix as a loader
      path: 'https://idealmart.ca/',  // Set your own domain or path here
    },
  };
  
  module.exports = nextConfig;
  