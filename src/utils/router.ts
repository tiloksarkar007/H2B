/**
 * Router utilities and state management for client-side routing
 */

export type AppRoute = '/' | '/about' | '/services' | '/contact' | '/privacy' | '404';

export interface RouteState {
  path: string;
  matchedRoute: AppRoute;
  search: string;
  hash: string;
  queryParams: Record<string, string>;
}

export const VALID_ROUTES: AppRoute[] = ['/', '/about', '/services', '/contact', '/privacy'];

/**
 * Normalizes pathname by stripping trailing slashes except for root
 */
export function normalizePath(path: string): string {
  if (!path || path === '') return '/';
  const clean = path.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) {
    return clean.slice(0, -1);
  }
  return clean || '/';
}

/**
 * Safely decodes a URI component without throwing URIError on malformed strings
 */
export function safeDecode(val: string): string {
  try {
    return decodeURIComponent(val);
  } catch {
    return val;
  }
}

/**
 * Parses query string into key-value map using URLSearchParams with safe fallback
 */
export function parseQueryString(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!search) return params;

  try {
    const cleanSearch = search.startsWith('?') ? search.slice(1) : search;
    const urlParams = new URLSearchParams(cleanSearch);
    urlParams.forEach((value, key) => {
      params[key] = value;
    });
  } catch {
    // Fallback if URLSearchParams encounters an unexpected input
    try {
      const cleanSearch = search.startsWith('?') ? search.slice(1) : search;
      const pairs = cleanSearch.split('&');
      for (const pair of pairs) {
        if (!pair) continue;
        const eqIdx = pair.indexOf('=');
        if (eqIdx !== -1) {
          const key = safeDecode(pair.slice(0, eqIdx));
          const val = safeDecode(pair.slice(eqIdx + 1));
          params[key] = val;
        } else {
          params[safeDecode(pair)] = '';
        }
      }
    } catch {
      // Safe no-op to prevent app crash on malformed inputs
    }
  }
  return params;
}

/**
 * Resolves current path to a valid AppRoute or 404
 */
export function matchRoute(path: string): AppRoute {
  try {
    const normalized = normalizePath(path);
    if (VALID_ROUTES.includes(normalized as AppRoute)) {
      return normalized as AppRoute;
    }
    return '404';
  } catch {
    return '404';
  }
}

/**
 * Parses full URL or relative path into RouteState
 */
export function parseLocation(pathname: string, search = '', hash = ''): RouteState {
  try {
    const normPath = normalizePath(pathname);
    const matchedRoute = matchRoute(normPath);
    const queryParams = parseQueryString(search);
    return {
      path: normPath,
      matchedRoute,
      search,
      hash: hash.startsWith('#') ? hash.slice(1) : hash,
      queryParams,
    };
  } catch {
    return {
      path: '/',
      matchedRoute: '/',
      search: '',
      hash: '',
      queryParams: {},
    };
  }
}

/**
 * Helper to determine if a nav link is active
 */
export function isNavActive(currentPath: string, targetPath: string): boolean {
  const normCurrent = normalizePath(currentPath);
  const normTarget = normalizePath(targetPath);
  return normCurrent === normTarget;
}
