import { useState } from 'react';

export default function useTheme() {
  const [colourTheme, setColourTheme] = useState({ mode: 'dark' });

  return {
    ...colourTheme,
    setTheme: ({ setTheme, ...colourTheme }: any) =>
      setColourTheme(colourTheme),
  };
}
