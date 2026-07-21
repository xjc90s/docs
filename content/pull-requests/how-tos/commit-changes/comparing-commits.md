---
title: Comparing commits
intro: You can compare the state of your repository across branches, tags, commits, forks, and dates.
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Commit changes
contentType: how-tos
---

To compare different versions of your repository, append `/compare` to your repository's path. The compare page uses `base` as the starting point and `compare` as the endpoint.

## Comparing branches

Use the Compare view to compare branches or start a pull request.

1. Navigate to `https://{% data variables.product.product_url %}/OWNER/REPOSITORY/compare`.
1. Use the `base` dropdown menu to select the branch you want to compare against.
1. Use the `compare` dropdown menu to select the branch that contains the changes.
1. Review the commits and changed files in the comparison.

For more information about pull request branch comparisons, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests).

## Comparing tags

Compare release tags to review changes between releases. For more information, see [AUTOTITLE](/repositories/releasing-projects-on-github/comparing-releases).

1. Navigate to `https://{% data variables.product.product_url %}/OWNER/REPOSITORY/compare`.
1. Select the older tag from the `base` dropdown menu.
1. Select the newer tag from the `compare` dropdown menu.
1. Review the commits and changed files in the comparison.

> [!NOTE]
> If a branch and a tag have the same name, the branch is used. To compare the tag, add `tags/` before the tag name.

## Comparing commits

You can compare two commits or Git Object IDs (OIDs) directly by editing the compare URL.

1. Navigate to the repository's compare page.
1. In the URL, enter the older commit as the base and the newer commit as the compare point.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

For more information about two-dot and three-dot comparisons, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons).

## Comparing across forks

Use owner-qualified branch names to compare branches across forks.

1. Navigate to the base repository's compare page.
1. Click **compare across forks** if the option is shown.
1. Select the base repository and branch.
1. Select the head fork and compare branch.

You can also edit the URL directly. For example, use `octocat:main` as `base` and `octo-org:main` as `compare` to compare the `main` branches of repositories owned by `octocat` and `octo-org`. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

## Comparisons across commits

To compare a commit with earlier commits, use Git's `^` or `~N` notation in the compare URL. For example, `96d29b7~5...96d29b7` compares `96d29b7` with the commit five commits before it.

## Differences between commit views

The repository commit history and a single file's commit history can show different results. A file's history shows commits that affected that file, while the repository history shows the broader branch history. If a file's history does not include the commit you need, use the repository's commits page instead.

For more information about how Git simplifies history, see [the "History Simplification"](https://git-scm.com/docs/git-log#_history_simplification) section of the `git log` documentation.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)
* [AUTOTITLE](/search-github/searching-on-github/searching-commits)
