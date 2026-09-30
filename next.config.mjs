/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/menu",
        destination: "/#menu",
        permanent: true,
      },
      {
        source: "/franchise",
        destination: "/#franchise",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/#career",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
