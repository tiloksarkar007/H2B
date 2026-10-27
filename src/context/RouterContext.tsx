import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { AppRoute, parseLocation, RouteState } from '../utils/router';

interface RouterContextType extends RouteState {
  navigate: (to: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [routeState, setRouteState] = useState<RouteState>(() => 
    parseLocation(window.location.pathname, window.location.search, window.location.hash)
  );

  const handleLocationUpdate = useCallback(() => {
    const newState = parseLocation(window.location.pathname, window.location.search, window.location.hash);
    setRouteState(newState);

    // If there is a hash, scroll smoothly to the element; otherwise scroll to top
    if (window.location.hash) {
      const hashId = window.location.hash.replace(/^#/, '');
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', handleLocationUpdate);
    
    // Check if initial URL had a hash anchor and scroll to it once mounted
    if (window.location.hash) {
      const hashId = window.location.hash.replace(/^#/, '');
      const timer = setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('popstate', handleLocationUpdate);
      };
    }

    return () => window.removeEventListener('popstate', handleLocationUpdate);
  }, [handleLocationUpdate]);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    if (options?.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }
    handleLocationUpdate();
  }, [handleLocationUpdate]);

  return (
    <RouterContext.Provider value={{ ...routeState, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter(): RouterContextType {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  to, 
  replace, 
  className = '', 
  activeClassName = '', 
  children, 
  onClick, 
  ...rest 
}) => {
  const { path, hash, navigate } = useRouter();

  // Check active status
  const targetPath = to.split('?')[0].split('#')[0] || '/';
  const targetHash = to.includes('#') ? to.split('#')[1] : '';
  const isActive = (path === targetPath) && (!targetHash || hash === targetHash);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Respect browser meta keys (new tab, new window, etc.)
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey
    ) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  const combinedClass = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a href={to} onClick={handleClick} className={combinedClass} {...rest}>
      {children}
    </a>
  );
};
