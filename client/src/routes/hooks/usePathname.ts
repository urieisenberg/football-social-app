import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

type PathMatchType = 'startsWith' | 'endsWith' | 'exact' | 'includes';

export const usePathname = () => {
  const { pathname } = useLocation();

  const pathMatch = useMemo(
    (): ((path: string, type: PathMatchType) => boolean) =>
      (path: string, type: PathMatchType): boolean => {
        switch (type) {
          case 'startsWith':
            return pathname.startsWith(path);
          case 'endsWith':
            return pathname.endsWith(path);
          case 'exact':
            return pathname === path;
          case 'includes':
            return pathname.includes(path);
          default:
            return false;
        }
      },
    [pathname]
  );

  return { pathMatch };
};
