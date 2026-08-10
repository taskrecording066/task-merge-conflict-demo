export const settings = {
  retries: 3,
  timeoutMs: 1500,
  featureFlag: true,
};

export function buildRequest(endpoint, options = {}) {
  return {
    endpoint,
    retries: options.retries ?? settings.retries,
    timeoutMs: options.timeoutMs ?? settings.timeoutMs,
  };
}
