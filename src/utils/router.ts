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
 * Parses query string into key-value map
 */
export function parseQueryString(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!search) return params;
  const cleanSearch = search.startsWith('?') ? search.slice(1) : search;
  const pairs = cleanSearch.split('&');
  for (const pair of pairs) {
    if (!pair) continue;
    const [key, val] = pair.split('=');
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(val || '');
    }
  }
  return params;
}

/**
 * Resolves current path to a valid AppRoute or 404
 */
export function matchRoute(path: string): AppRoute {
  const normalized = normalizePath(path);
  if (VALID_ROUTES.includes(normalized as AppRoute)) {
    return normalized as AppRoute;
  }
  return '404';
}

/**
 * Parses full URL or relative path into RouteState
 */
export function parseLocation(pathname: string, search = '', hash = ''): RouteState {
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
}

/**
 * Helper to determine if a nav link is active
 */
export function isNavActive(currentPath: string, targetPath: string): boolean {
  const normCurrent = normalizePath(currentPath);
  const normTarget = normalizePath(targetPath);
  return normCurrent === normTarget;
}
