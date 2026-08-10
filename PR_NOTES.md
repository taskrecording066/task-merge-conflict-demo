# Merge conflict notes

Main changed `timeoutMs` from 1500 to 2000. Feature branch added `featureFlag` and changed retries to 5.

Decision: keep the feature flag, keep the stricter retry value from the feature branch, and use the main branch timeout value unless there is a direct requirement to override it.
