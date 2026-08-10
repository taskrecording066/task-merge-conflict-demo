# Merge conflict resolution walkthrough

This repository is a demo for resolving a merge conflict during a feature merge.

## Task
Merge the latest main branch into a feature branch and resolve the conflicting updates without losing intended logic.

## What to look for
- two versions of the same configuration object
- the same validation rule changed in different branches
- one branch adds logging while the other adds stricter checks

## Suggested workflow
1. Pull the latest main.
2. Merge the feature branch into the working branch.
3. Resolve the conflict in the business logic file.
4. Verify the final output still matches the feature requirement.

## Deliverable
A clean merge resolution commit with a short explanation of the decision.
