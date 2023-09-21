'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
