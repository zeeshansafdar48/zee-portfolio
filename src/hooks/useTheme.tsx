import { useState } from 'react';
// import storage from 'local-storage-fallback';

export default function useTheme() {
  const [colourTheme, setColourTheme] = useState({ mode: 'dark' });

  // function getInitialTheme() {
  //   const savedTheme = storage.getItem('colourTheme');
  //   return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  // }

  // useEffect(() => {
  //   storage.setItem('colourTheme', JSON.stringify(colourTheme));
  // }, [colourTheme]);

  return {
    ...colourTheme,
    setTheme: ({ setTheme, ...colourTheme }: any) =>
      setColourTheme(colourTheme),
  };
}
