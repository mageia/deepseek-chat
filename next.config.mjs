/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "",
  experimental: {
    serverActions: {
      allowedOrigins: ["dg-chat.zeabur.app", "chat.bitiiot.com"],
      allowedForwardedHosts: ["dg-chat.zeabur.app", "chat.bitiiot.com"],
    },
  },
};

export default nextConfig;