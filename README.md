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

The default policy favors predictable delivery: requests time out after 2000 ms, retry four
times with a 250 ms backoff, and include the current rollout state. Callers can override policy
for a specific endpoint when an integration has a documented requirement.
