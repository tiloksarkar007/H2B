import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePath, parseQueryString, matchRoute, parseLocation, isNavActive } from './router';

test('normalizePath trims slashes and queries', () => {
  assert.equal(normalizePath('/'), '/');
  assert.equal(normalizePath('/services/'), '/services');
  assert.equal(normalizePath('/about?intent=consultation'), '/about');
  assert.equal(normalizePath('/contact#form'), '/contact');
  assert.equal(normalizePath(''), '/');
});

test('parseQueryString correctly decomposes params', () => {
  const parsed = parseQueryString('?intent=consultation&service=cold-calling');
  assert.equal(parsed.intent, 'consultation');
  assert.equal(parsed.service, 'cold-calling');

  const empty = parseQueryString('');
  assert.deepEqual(empty, {});
});

test('matchRoute recognizes valid routes and fallback 404', () => {
  assert.equal(matchRoute('/'), '/');
  assert.equal(matchRoute('/about'), '/about');
  assert.equal(matchRoute('/services'), '/services');
  assert.equal(matchRoute('/contact'), '/contact');
  assert.equal(matchRoute('/privacy'), '/privacy');
  assert.equal(matchRoute('/unknown-page'), '404');
  assert.equal(matchRoute('/services/nested'), '404');
});

test('parseLocation structures full route state', () => {
  const state = parseLocation('/services', '?service=lead-qualification', '#lead-qualification');
  assert.equal(state.matchedRoute, '/services');
  assert.equal(state.queryParams.service, 'lead-qualification');
  assert.equal(state.hash, 'lead-qualification');
});

test('isNavActive evaluates active navigation states', () => {
  assert.equal(isNavActive('/services/', '/services'), true);
  assert.equal(isNavActive('/about', '/services'), false);
});
