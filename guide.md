# Merge conflict resolution walkthrough

This is a short Git merge task for a 15–25 minute recording.

## Goal
Resolve a merge conflict in a realistic codebase while preserving the correct business behavior and explaining the decision-making clearly.

## Apps to use
- Terminal
- VS Code
- GitHub or Git UI

## Exact recording steps
1. Open the repo in VS Code and explain that you are merging a feature branch into main while a conflict exists.
2. In the terminal, run a merge command such as `git checkout main` followed by `git pull` and then `git merge feature/task-recording`.
3. Explain that both branches changed the same configuration object, so Git is marking a conflict in the file.
4. Open the conflicted file in VS Code and show the conflict markers.
5. Walk through each side of the conflict:
   - main changed the timeout value
   - the feature branch changed retry count and added a feature flag
6. Explain the decision you are making:
   - keep the feature flag from the feature branch
   - keep the feature branch retry count because that was intentional
   - keep the main-side timeout value unless the feature explicitly requires an override
7. Remove the conflict markers and clean up the final config object.
8. Stage the file and commit the resolution: `git add ...` and `git commit -m "Resolve merge conflict by preserving feature config"`.
9. Show the final merged state and explain why this is the least risky path.

## What you should say while recording
- "The key is not to blindly choose one side. I’m validating which behavior is intentional and which value is a real conflict."
- "I’m keeping the new feature setting while preserving the stable timeout from main."
- "This reduces risk because it keeps both branch intentions without breaking the shared default behavior."

## Deliverable
A clean conflict resolution commit with a short explanation of the choices made during the merge.
