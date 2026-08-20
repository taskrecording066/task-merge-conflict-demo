export const deliveryPolicy = {
  timeoutMs: 2000,
  maxAttempts: 4,
  rollout: 'standard',
  logLevel: 'warn',
  backoffMs: 250
};

export function resolveDeliveryPolicy(overrides = {}) {
  const policy = { ...deliveryPolicy, ...overrides };
  return {
    timeoutMs: policy.timeoutMs,
    maxAttempts: policy.maxAttempts,
    rollout: policy.rollout,
    logLevel: policy.logLevel,
    backoffMs: policy.backoffMs
  };
}
