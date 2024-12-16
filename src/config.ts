interface Config {
  apiUrl: string;
  environment: string;
}

declare global {
  interface Window {
    __RUNTIME_CONFIG__: Config;
  }
}

const defaultConfig: Config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  environment: import.meta.env.VITE_ENVIRONMENT || 'development'
};

export const getConfig = (): Config => {
  if (typeof window !== 'undefined' && window.__RUNTIME_CONFIG__) {
    return window.__RUNTIME_CONFIG__;
  }
  return defaultConfig;
}; 