import { resolveDeliveryPolicy } from './config.js';

export function createWebhookRequest(endpoint, overrides = {}) {
  const policy = resolveDeliveryPolicy(overrides);
  return {
    endpoint,
    method: 'GET',
    timeoutMs: policy.timeoutMs,
    maxAttempts: policy.maxAttempts,
    rollout: policy.rollout,
    logLevel: policy.logLevel,
    priorityHeader: policy.priorityHeader
  };
}
