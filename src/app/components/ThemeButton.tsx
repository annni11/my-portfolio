'use client';

import { useTheme } from 'next-themes';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='pb-1'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? (
        <LightModeIcon
          sx={{
            fontSize: 22,
            color: '#a1a1aa',
            ':hover': { color: '#fbbf24' },
          }}
        />
      ) : (
        <DarkModeIcon
          sx={{
            fontSize: 22,
            color: '#a1a1aa',
            ':hover': { color: '#fbbf24' },
          }}
        />
      )}
    </button>
  );
};

export default ThemeButton;
