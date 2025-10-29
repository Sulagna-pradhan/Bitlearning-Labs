import { useLayoutEffect, useState } from 'react';

const useIsMobile = (MAX_WIDTH = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < MAX_WIDTH);
    };
    window.addEventListener('resize', updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, [window.innerWidth, MAX_WIDTH]);

  return isMobile;
};

export default useIsMobile;
