export const deliveryPolicy = {
  timeoutMs: 1500,
  maxAttempts: 3,
  rollout: 'standard',
  logLevel: 'info'
};

export function resolveDeliveryPolicy(overrides = {}) {
  const policy = { ...deliveryPolicy, ...overrides };
  return {
    timeoutMs: policy.timeoutMs,
    maxAttempts: policy.maxAttempts,
    rollout: policy.rollout,
    logLevel: policy.logLevel
  };
}
