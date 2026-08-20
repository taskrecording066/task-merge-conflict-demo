import { prepareDelivery } from './app.js';

const request = prepareDelivery('https://hooks.example.test/orders', {
  rollout: 'priority'
});

console.log(request);
