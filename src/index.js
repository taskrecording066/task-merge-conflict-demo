import { prepareDelivery } from './app.js';

const request = prepareDelivery('https://hooks.example.test/orders', {
  rollout: 'standard'
});

console.log(request);
