import test from 'node:test';
import assert from 'node:assert/strict';
import { buildRequestOptions } from '../src/config.js';

test('buildRequestOptions preserves defaults', () => {
  const result = buildRequestOptions({ retries: 5 });
  assert.equal(result.timeoutMs, 1500);
  assert.equal(result.retries, 5);
  assert.equal(result.featureFlag, false);
});
