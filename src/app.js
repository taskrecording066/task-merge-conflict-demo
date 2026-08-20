import { createWebhookRequest } from './requestBuilder.js';

export function prepareDelivery(endpoint, overrides = {}) {
  return createWebhookRequest(endpoint, overrides);
}
