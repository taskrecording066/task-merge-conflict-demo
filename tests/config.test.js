import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveDeliveryPolicy } from '../src/config.js';

test('resolveDeliveryPolicy preserves defaults', () => {
  const result = resolveDeliveryPolicy({ maxAttempts: 5 });
  assert.equal(result.timeoutMs, 1200);
  assert.equal(result.maxAttempts, 5);
  assert.equal(result.rollout, 'priority');
  assert.equal(result.priorityHeader, 'x-delivery-priority');
});
