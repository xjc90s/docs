---
title: About branches
intro: Use a branch to isolate development work without affecting other branches in the repository. Each repository has one default branch, and can have multiple other branches. You can merge a branch into another branch using a pull request.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Create pull requests
contentType: concepts
---

## About branches

Branches let you develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository.

You always create a branch from an existing branch. Typically, you might create a new branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository.

A branch you create to build a feature is commonly called a feature branch or topic branch. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).

You can also use a branch to publish a {% data variables.product.prodname_pages %} site. For more information, see [AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages).

You must have write access to a repository to create a branch, open a pull request, or delete and restore branches in a pull request. For more information, see [AUTOTITLE](/get-started/learning-about-github/access-permissions-on-github).

## About the default branch

{% data reusables.branches.new-repo-default-branch %} The default branch is the branch that {% data variables.product.prodname_dotcom %} displays when anyone visits your repository. The default branch is also the initial branch that Git checks out locally when someone clones the repository. {% data reusables.branches.default-branch-automatically-base-branch %}

By default, {% data variables.product.github %} names the default branch `main` in any new repository.

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## Working with branches

Branches are usually short-lived. After you finish work on a branch, you can open a pull request to discuss and merge the changes from the head branch into the base branch. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

After a pull request has been merged or closed, the head branch is often no longer needed. Deleting unused branches keeps a repository easier to navigate. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request).

{% data reusables.pull_requests.retargeted-on-branch-deletion %}

For example, if one pull request targets a feature branch and that feature branch is later merged and deleted, {% data variables.product.prodname_dotcom %} may update the remaining pull request so that it targets the merged branch's base branch instead.

## Working with protected branches

Protected branches help maintainers enforce rules on important branches. A protected branch can block force pushes or deletion, require status checks, require reviews, require code owner approval, or require signed commits before changes can merge.

These protections help teams keep important branches stable and make expectations clear before a pull request is merged. To see whether your pull request can be merged, check the merge box at the bottom of the pull request's **Conversation** tab. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

> [!NOTE]
> If you're a repository administrator, you can merge pull requests on branches with branch protections enabled even if the pull request does not meet the requirements, unless branch protections have been set to "Include administrators."

## Comparing branches in pull requests

> [!NOTE]
> When you create your pull request, you can change the base branch that you're comparing your changes against. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#changing-the-branch-range-and-destination-repository).

A pull request compares the proposed changes on the head branch with the base branch. The **Files changed** tab shows what would change if the pull request merged.

![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Diff views help reviewers understand the changes without reading every commit. You can view a unified diff, split diff, rich diff, or source diff; ignore whitespace changes; or filter files to focus on the most relevant changes. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request).

![Screenshot of the "Files changed" tab for a pull request. The "Diff view" menu is outlined in dark orange.](/assets/images/help/pull_requests/diff-settings-menu.png)

Diffs may not display if a pull request exceeds repository diff limits or if a file is hidden by a rule in the repository's _.gitattributes_ file. For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/repository-limits#diff-limits) and [AUTOTITLE](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github).

### Three-dot and two-dot Git diff comparisons

There are two comparison methods for the `git diff` command: two-dot (`git diff A..B`) and three-dot (`git diff A...B`). Pull requests on {% data variables.product.prodname_dotcom %} show a three-dot diff.

#### Three-dot Git diff comparison

The three-dot comparison shows the difference between the most recent common commit of both branches (merge base) and the most recent version of the topic branch.

#### Two-dot Git diff comparison

The two-dot comparison shows the difference between the most recent state of the base branch (for example, `main`) and the most recent version of the topic branch.

A two-dot diff compares two Git committish references, such as SHAs or OIDs (Object IDs), directly with each other. On {% data variables.product.prodname_dotcom %}, the Git committish references in a two-dot diff comparison must be pushed to the same repository or its forks.

For more information about Git commands to compare changes, see [Git diff options](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203) from the _Pro Git_ book site.

### About three-dot comparison on {% data variables.product.prodname_dotcom %}

Because the three-dot comparison uses the merge base, it focuses on "what a pull request introduces."

When you use a two-dot comparison, the diff changes when the base branch is updated, even if you haven't made any changes to the topic branch. A two-dot comparison also focuses on the base branch, which can make the changes introduced by the topic branch harder to understand.

In contrast, a three-dot comparison keeps showing the changes introduced by the topic branch since the branches diverged.

#### Merging often

To avoid confusion, merge the base branch (for example, `main`) into your topic branch frequently. When you merge the base branch, the diffs shown by two-dot and three-dot comparisons are the same. We recommend merging a pull request as soon as possible. This encourages contributors to make pull requests smaller, which we recommend in general.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
* [AUTOTITLE](/get-started/learning-about-github/github-glossary#branch) in the {% data variables.product.prodname_dotcom %} glossary
* [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) in the Git documentation
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
