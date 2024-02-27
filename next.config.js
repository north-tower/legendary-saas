/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["github.com","lh3.googleusercontent.com"],
    },
    async rewrites(){
        return [
            {
                source: "/api/v1:path*",
                destination: "http://localhost:5000/api/v1/:path*"
            }
        ]
    }
};

module.exports = nextConfig;