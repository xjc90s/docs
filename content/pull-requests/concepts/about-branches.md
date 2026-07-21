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

Once you're satisfied with your work, you can open a pull request to merge the changes in the current branch (the _head_ branch) into another branch (the _base_ branch). For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

After a pull request has been merged or closed, you can delete the head branch because it's no longer needed. You must have write access in the repository to delete branches. You can't delete branches that are directly associated with open pull requests. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request).

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
The following diagrams illustrate this.

In the first diagram, someone has created a branch called `feature1` from the `main` branch, and then you created a branch called `feature2` from `feature1`. There are open pull requests for both branches. The arrows indicate the current base branch for each pull request. At this point, `feature1` is the base branch for `feature2`. If the pull request for `feature2` is merged now, the `feature2` branch will be merged into `feature1`.

![Diagram that shows a feature1 branch with a pull request targeting main, and a feature2 branch with a pull request targeting feature1.](/assets/images/help/branches/pr-retargeting-diagram1.png)

In the next diagram, someone has merged the pull request for `feature1` into the `main` branch and deleted the `feature1` branch. As a result, {% data variables.product.prodname_dotcom %} has automatically retargeted the pull request for `feature2` so that its base branch is now `main`.

![Diagram that shows both feature1 and feature2 branches with pull requests targeting main.](/assets/images/help/branches/pr-retargeting-diagram2.png)

Now, when you merge the `feature2` pull request, it'll be merged into the `main` branch.

## Working with protected branches

Repository administrators or custom roles with the "edit repository rules" permission can enable protections on a branch. If you're working on a branch that's protected, you won't be able to delete or force push to the branch. Repository administrators can also enable other protected branch settings to enforce workflows before a branch can be merged.

> [!NOTE]
> If you're a repository administrator, you can merge pull requests on branches with branch protections enabled even if the pull request does not meet the requirements, unless branch protections have been set to "Include administrators."

To see if your pull request can be merged, look in the merge box at the bottom of the pull request's **Conversation** tab. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

When a branch is protected:

* You can't delete or force push to the branch.
* If required status checks are enabled on the branch, you can't merge changes into the branch until all of the required CI tests pass. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).
* If required pull request reviews are enabled on the branch, you can't merge changes into the branch until all requirements in the pull request review policy have been met. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
* If required review from a code owner is enabled on a branch and a pull request modifies code that has an owner, a code owner must approve the pull request before it can be merged. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).
* If required commit signing is enabled on a branch, you can't push any commits to the branch that are not signed and verified. For more information, see [AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification) and [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits).
* If you use {% data variables.product.prodname_dotcom %}'s conflict editor to fix conflicts for a pull request that you created from a protected branch, {% data variables.product.prodname_dotcom %} helps you create an alternative branch for the pull request so that your conflict resolution can be merged. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).

## Comparing branches in pull requests

> [!NOTE]
> When you create your pull request, you can change the base branch that you're comparing your changes against. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#changing-the-branch-range-and-destination-repository).

You can view proposed changes in a pull request in the Files changed tab.
![Screenshot of the tabs for a pull request. The "Files changed" tab is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Instead of viewing the commits themselves, you can view the proposed changes as they'll appear in the files once the pull request is merged. The files appear in alphabetical order within the Files changed tab. Additions to the files appear in green and are marked by a `+` sign. Content that has been removed appears in red and is marked by a `-` sign.

### Diff view options

> [!TIP]
> If you're having trouble understanding the context of a change, you can click **View** in the Files changed tab to view the whole file with the proposed changes.

You have several options for viewing a diff:
* The unified view shows updated and existing content together in a linear view.
* The split view shows old content on one side and new content on the other side.
* The rich diff view shows a preview of how the changes will look once the pull request is merged.
* The source view shows the changes in source without the formatting of the rich diff view.

You can also choose to ignore whitespace changes to get a more accurate view of the meaningful changes in a pull request.

![Screenshot of the "Files changed" tab for a pull request. The "Diff view" menu is outlined in dark orange.](/assets/images/help/pull_requests/diff-settings-menu.png)

To simplify reviewing changes in a large pull request, filter the diff to show only selected file types, show files you are a CODEOWNER of, hide files you have already viewed, or hide deleted files. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request).

![Screenshot of the file filter dropdown menu. The menu is expanded and outlined in dark orange.](/assets/images/help/pull_requests/file-filter-menu.png)

You can also use the diff view to see which dependencies you are introducing or changing with your pull request, and whether the dependency versions contain security vulnerabilities. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request#reviewing-dependencies-in-a-pull-request).

### Reasons diffs will not display

* You've exceeded the total limit of files or certain file types. For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/repository-limits#diff-limits).
* Your file matches a rule in the repository's _.gitattributes_ file to block that file from displaying by default. For more information, see [AUTOTITLE](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github).

### Three-dot and two-dot Git diff comparisons

There are two comparison methods for the `git diff` command: two-dot (`git diff A..B`) and three-dot (`git diff A...B`). Pull requests on {% data variables.product.prodname_dotcom %} show a three-dot diff.

#### Three-dot Git diff comparison

The three-dot comparison shows the difference between the most recent common commit of both branches (merge base) and the most recent version of the topic branch.

#### Two-dot Git diff comparison

The two-dot comparison shows the difference between the most recent state of the base branch (for example, `main`) and the most recent version of the topic branch.

To see two committish references in a two-dot diff comparison on {% data variables.product.prodname_dotcom %}, you can edit the URL of your repository's "Comparing changes" page. For more information, see the [Git Glossary for "committish"](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) on the _Pro Git_ book site.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

A two-dot diff compares two Git committish references, such as SHAs or OIDs (Object IDs), directly with each other. On {% data variables.product.prodname_dotcom %}, the Git committish references in a two-dot diff comparison must be pushed to the same repository or its forks.

If you want to simulate a two-dot diff in a pull request and see a comparison between the most recent versions of each branch, you can merge the base branch into your topic branch, which updates the last common ancestor between your branches.

For more information about Git commands to compare changes, see [Git diff options](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203) from the _Pro Git_ book site.

### About three-dot comparison on {% data variables.product.prodname_dotcom %}

Because the three-dot comparison uses the merge base, it focuses on "what a pull request introduces."

When you use a two-dot comparison, the diff changes when the base branch is updated, even if you haven't made any changes to the topic branch. Additionally, a two-dot comparison focuses on the base branch. This means that anything you add is displayed as missing from the base branch, as if it was a deletion, and vice versa. As a result, the changes the topic branch introduces become ambiguous.

In contrast, when you compare the branches using the three-dot comparison, changes in the topic branch are always in the diff if the base branch is updated, because the diff shows all of the changes since the branches diverged.

#### Merging often

To avoid confusion, merge the base branch (for example, `main`) into your topic branch frequently. When you merge the base branch, the diffs shown by two-dot and three-dot comparisons are the same. We recommend merging a pull request as soon as possible. This encourages contributors to make pull requests smaller, which we recommend in general.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
* [AUTOTITLE](/get-started/learning-about-github/github-glossary#branch) in the {% data variables.product.prodname_dotcom %} glossary
* [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) in the Git documentation
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
