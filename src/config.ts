// API Configuration
// In development: uses local proxy (/api)
// In production: uses the tunnel URL from environment variable

export const API_URL = import.meta.env.VITE_API_URL || '/api';

export const getApiUrl = (path: string) => {
  const base = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
  const endpoint = path.startsWith('/') ? path : `/${path}`;
  return `${base}${endpoint}`;
};
