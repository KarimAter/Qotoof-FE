/* eslint-disable no-shadow */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { tsconfig: "tsconfig.json" },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled:true
});

module.exports = (phase, nextConfig) => withBundleAnalyzer(nextConfig);
