import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add Supabase to external packages for Server Components
  serverExternalPackages: ['@supabase/supabase-js'],
  
  // Environment variables that will be available at build time
  env: {
    // These will be replaced at build time
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  
  // For debugging - shows build-time env status
  webpack: (config, { isServer, buildId }) => {
    if (isServer) {
      console.log('\n=== Build Environment Check ===');
      console.log('Has SUPABASE_URL:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
      console.log('Has SUPABASE_ANON_KEY:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
      console.log('NODE_ENV:', process.env.NODE_ENV);
      console.log('===============================\n');
    }
    return config;
  },
};

export default nextConfig;