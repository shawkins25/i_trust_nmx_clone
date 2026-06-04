import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
   remotePatterns: [
     {
       protocol: "https",
       hostname: "cdn.nutramax.com",
       pathname: "/**",
     },
   ],
 },
};
export default nextConfig;