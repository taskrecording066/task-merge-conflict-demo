export const deliveryPolicy = {
  timeoutMs: 1200,
  maxAttempts: 6,
  rollout: 'priority',
  logLevel: 'info',
  priorityHeader: 'x-delivery-priority'
};

export function resolveDeliveryPolicy(overrides = {}) {
  const policy = { ...deliveryPolicy, ...overrides };
  return {
    timeoutMs: policy.timeoutMs,
    maxAttempts: policy.maxAttempts,
    rollout: policy.rollout,
    logLevel: policy.logLevel,
    backoffMs: policy.backoffMs,
    priorityHeader: policy.priorityHeader
  };
}
