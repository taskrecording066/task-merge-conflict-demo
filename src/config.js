export const defaults = {
  timeoutMs: 1500,
  retries: 3,
  featureFlag: false,
  logLevel: 'info'
};

export function buildRequestOptions(overrides = {}) {
  const settings = { ...defaults, ...overrides };
  return {
    timeoutMs: settings.timeoutMs,
    retries: settings.retries,
    featureFlag: settings.featureFlag,
    logLevel: settings.logLevel
  };
}
