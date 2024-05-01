/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });

    return config;
  },
  images: {
<<<<<<< HEAD
    domains: [
      "uploadthing.com",
      "utfs.io"
    ]
  }
}
=======
    domains: ["uploadthing.com", "utfs.io"],
  },
};
>>>>>>> 221e631183579bd140dbe509ee423df5913473b6

module.exports = nextConfig
