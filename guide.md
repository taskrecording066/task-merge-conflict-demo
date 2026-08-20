# Delivery policy update

The notification platform is standardizing outbound webhook behavior. Review the policy change
before shipping it so existing integrations remain reliable while the new delivery controls are
introduced.

## Local verification

Run `npm test` and `node src/index.js`. The sample output should contain an endpoint, method,
timeout, attempt limit, rollout channel, and log level.
