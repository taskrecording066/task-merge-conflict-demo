# Dispatch Gateway

Dispatch Gateway builds consistent outbound webhook requests for the notification platform.
It centralizes delivery policy so individual integrations do not need to know about retry,
timeout, or rollout settings.

## Commands

```sh
npm test
node src/index.js
```

## Request policy

The priority policy favors urgent delivery: requests time out after 1200 ms, retry up to six
times, and identify priority traffic with a delivery header. Callers can override policy for a
specific endpoint when an integration has a documented requirement.
