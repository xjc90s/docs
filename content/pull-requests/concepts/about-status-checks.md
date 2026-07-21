---
title: About status checks
intro: Status checks let you know if your commits meet the conditions set for the repository you're contributing to.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Merge and close pull requests
contentType: concepts
---

Status checks show whether commits meet the conditions set for a repository. They are usually created by external systems, such as continuous integration builds, tests, code scanning, or deployment checks.

Status checks help reviewers and maintainers understand whether a pull request is ready to merge. A check can show that work is still running, that changes passed validation, or that something needs attention.

![Screenshot of a list of commits and statuses.](/assets/images/help/pull_requests/commit-list-statuses.png)

If status checks are required for a protected branch, they must pass before the pull request can be merged. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging).

{% data reusables.actions.workflows.skipped-job-status-checks-passing %}

## Types of status checks on {% data variables.product.github %}

There are two types of status checks on {% data variables.product.github %}:

* **Checks** provide detailed output, annotations, and messages. They are created by {% data variables.product.prodname_github_apps %}, including {% data variables.product.prodname_actions %}.
* **Commit statuses** provide a simpler status for a commit. They are often used by external services and integrations.

> [!NOTE]
> {% data variables.product.prodname_actions %} generates checks, not commit statuses, when workflows are run.

Organization owners and users with push access to a repository can create checks and commit statuses with {% data variables.product.github %}'s API. For more information, see [AUTOTITLE](/rest/checks) and [AUTOTITLE](/rest/commits/statuses).

## Checks

Checks can include build logs, test results, annotations, and links to more detail. In a pull request, the **Checks** tab helps you understand which validations ran and why a check passed or failed.

> [!NOTE]
> The **Checks** tab is populated for pull requests only if you set up _checks_, not _commit statuses_, for the repository.

When a check points to a specific line, details can also appear in the **Files** tab of the pull request. This helps reviewers connect automated feedback to the code being changed.

![Screenshot of the "Checks" tab of a pull request. The "Checks" tab and the dropdown menu to select a commit are both outlined in dark orange.](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

## Skipping and requesting checks for individual commits

Some repositories allow checks to be skipped or requested for individual commits. This can be useful when a check is not relevant to a specific change, or when checks are not requested automatically.

For {% data variables.product.prodname_actions %} workflows, you can skip workflow runs triggered by the `push` and `pull_request` events by including a skip instruction in your commit message. For more information, see [AUTOTITLE](/actions/managing-workflow-runs/skipping-workflow-runs).

For check suite preferences and commit trailers such as `skip-checks: true` or `request-checks: true`, see [AUTOTITLE](/rest/checks/suites#update-repository-preferences-for-check-suites).

{% data reusables.commits.about-commit-cleanup %}

## Check statuses and conclusions

Checks move through statuses as they run, then receive a conclusion when they finish.

| State | What it means |
| --- | --- |
| Waiting or queued | The check has not started yet, or is waiting for a required condition such as capacity or deployment approval. |
| In progress | The check is running. |
| Completed | The check finished and has a conclusion, such as success, failure, cancelled, skipped, or timed out. |

A successful conclusion usually means the check does not block merging. A failure, timeout, or action-required conclusion usually means someone must review the details before the pull request can merge.

## Retention of checks

{% data reusables.pull_requests.retention-checks-data %}
