import { buildRequestOptions } from './config.js';

export function createApiRequest(endpoint, overrides = {}) {
  const options = buildRequestOptions(overrides);
  return {
    endpoint,
    method: 'GET',
    timeoutMs: options.timeoutMs,
    retries: options.retries,
    featureFlag: options.featureFlag,
    logLevel: options.logLevel
  };
}
