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
To compare different versions of your repository, append `/compare` to your repository's path.

The following example uses the compare page for [a fork of the Linguist repository](https://github.com/octocat/linguist), which is at [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

Every repository's Compare view contains two dropdown menus: `base` and `compare`.

`base` is the starting point of your comparison, and `compare` is the endpoint. During a comparison, you can change your `base` and `compare` points by clicking **Edit**.

## Comparing branches

The most common use of Compare is to compare branches, such as when you're starting a new pull request. You'll always be taken to the branch comparison view when starting [a new pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

To compare branches, select a branch name from the `compare` dropdown menu at the top of the page.

Here's an example of a [comparison between two branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Comparing tags

Comparing release tags shows changes to your repository since the last release.
For more information, see [AUTOTITLE](/repositories/releasing-projects-on-github/comparing-releases).

To compare tags, select a tag name from the `compare` dropdown menu at the top of the page.

Here's an example of a [comparison between two tags](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

> [!NOTE]
> If a branch and a tag have the same name, the branch will be used when comparing commits. You can compare the tag specifically by adding `tags/` to the tag name.

## Comparing commits

You can also compare two arbitrary commits in your repository or its forks on {% data variables.product.prodname_dotcom %} in a two-dot diff comparison.

To quickly compare two commits or Git Object IDs (OIDs) directly with each other in a two-dot diff comparison on {% data variables.product.prodname_dotcom %}, edit the URL of your repository's "Comparing changes" page.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

To learn more about other comparison options, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons).

## Comparing across forks

You can compare your base repository and any forked repository. This view appears when a user opens a pull request to a project.

To compare branches on different repositories, preface the branch names with user names. For example, specify `octocat:main` for `base` and `octo-org:main` for `compare` to compare the `main` branches of repositories owned by `octocat` and `octo-org`.

You can also preface the branch name with a user name and a repository name. For example, specifying `octocat:awesome-app:main` uses the `main` branch in the `octocat/awesome-app` repository. This can be useful in large organizations, where an upstream repository and a fork might both be owned by the organization. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

Here's an example of a [comparison between two repositories](https://github.com/github-linguist/linguist/compare/master...octocat:master).

## Comparisons across commits

You can compare a single commit in Git to the commit's predecessors using two types of notation.

| Notation | Meaning | Example | Comparison |
| :-: | :- | :- | :- |
| `^` | One commit prior. Repeat the `^` character to indicate one more commit further back in the history. | `96d29b7^^^^^`<br/><br/>Represents the commit five commits prior to `96d29b7`. | [View comparison](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7) |
| `~N` | N commit(s) prior. | `96d29b7~5`<br/><br/>Represents the commit five commits prior to `96d29b7`. | [View comparison](https://github.com/octocat/linguist/compare/octocat:96d29b7%7E5...octocat:96d29b7) |

## Differences between commit views

You might observe differences in commit history depending on the chosen viewing method. On {% data variables.product.github %}, you can see the commit history of a repository in these places:

* The repository's [commits page](https://github.com/rust-lang/rust/commits/main), which you can open by clicking the clock icon with the number of commits at the top of the main repository view.
* The [commit history for a specific file](https://github.com/rust-lang/rust/commits/main/README.md), which you can open by clicking a file and then clicking **History**.

These two commit views may show _different_ information at times. The history for a single file may omit commits found on the repository's commit history.

Git has several ways to show the history of a repository. When Git shows the history of a single file, it simplifies history by omitting commits that did not change the file. Instead of looking at every commit to decide whether it touched the file, Git will omit a whole branch if that branch, when merged, did not impact the final contents of the file. Any commits on that branch that touched the file will not be shown.

For a file's commit history, {% data variables.product.github %} explicitly follows this simple strategy. It makes the history simpler by removing commits that didn't contribute to the final result. For example, if a side branch made a change and then reverted it, that commit would not show up in the branch history. This makes reviewing branches more efficient, since you only see the commits that affect the file.

This truncated view might not always contain the information you need. To see the entire history, use the repository's commits page on {% data variables.product.github %}.

For more information on how Git considers commit history, see [the "History Simplification"](https://git-scm.com/docs/git-log#_history_simplification) section of the `git log` help article.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)
* [AUTOTITLE](/authentication/managing-commit-signature-verification/signing-commits)
* [AUTOTITLE](/search-github/searching-on-github/searching-commits)
