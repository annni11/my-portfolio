'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
  return <ThemeProvider attribute='data-theme'>{children}</ThemeProvider>;
};

export default Providers;
