import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
    async rewrites() {
        return [
          {
            source: "/api/auth/login",
            destination: "http://127.0.0.1:4000/auth/login",
          },
        ];
    },
}
export default nextConfig