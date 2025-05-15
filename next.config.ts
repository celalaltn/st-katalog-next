import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // PDF dosyalarını işleyebilmek için gerekli yapılandırma
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    });

    return config;
  },
  // CORS sorunlarını önlemek için
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
