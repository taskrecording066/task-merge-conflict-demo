import { createApiRequest } from './requestBuilder.js';

const request = createApiRequest('/api/health', {
  retries: 5,
  featureFlag: true
});

console.log(request);
