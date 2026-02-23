// API Configuration
// In development: uses local proxy (/api)
// In production: uses the tunnel URL from environment variable

export const API_URL = import.meta.env.VITE_API_URL || '/api';
export const API_KEY = import.meta.env.VITE_API_KEY || '8c9ae50a8cb3490e845efb7cdb1fa9b9';

export const getApiUrl = (path: string) => {
  const base = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
  const endpoint = path.startsWith('/') ? path : `/${path}`;
  return `${base}${endpoint}`;
};

export const getApiHeaders = () => ({
  'Content-Type': 'application/json',
  'X-API-Key': API_KEY,
});
