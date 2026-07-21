---
title: About pull requests
intro: Pull requests let you propose, review, and merge code changes.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
  - /pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Create pull requests
contentType: concepts
---

Pull requests are proposals to merge code changes into a project. A pull request is {% data variables.product.github %}'s key **collaboration feature**, letting you discuss and review changes before merging them. This helps teams work together, catch issues early, and maintain code quality.

<a href="https://github.com/pulls?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>View your pull requests</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## Working with pull requests

The **Conversation** tab of a pull request displays a description of the changes, a timeline of events, and comments and reviews from collaborators. This tab lets you track the discussion and progress of the proposed changes.

The **Commits** tab shows all commits on the pull request branch in chronological order. This helps you understand the development history and see how the changes evolved over time.

The **Checks** tab displays the status of any automated tests, builds, or other continuous integration workflows that run when you push commits. These checks help ensure your changes meet quality standards before merging.

The **Files changed** tab shows the differences between the proposed changes and the existing code, making it easy to see what will change when the pull request merges.

You can view the **Merge status** of a pull request directly in the header from anywhere in the pull request page. Click the merge status to open the details, quickly identify blockers and missing approvals, and get your pull request ready to merge.

## Draft pull requests

When you create a pull request, you can choose to make it a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review them. Drafts are useful when you want to share work-in-progress without formally requesting reviews.

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. See [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).

## Pull request refs and merge branches

When you open a pull request, {% data variables.product.github %} creates up to two temporary, read-only Git references for it:

| Ref | Description |
| --- | --- |
| `refs/pull/PULL_REQUEST_NUMBER/head` | Points to the latest commit on the pull request's head branch. |
| `refs/pull/PULL_REQUEST_NUMBER/merge` | A merge branch—a simulated merge commit that represents what the repository would look like if the pull request were merged right now. This ref is only available when the pull request has no merge conflicts. |

The merge branch automatically updates when the head branch changes. To fetch it locally:

```shell
git fetch origin refs/pull/PULL_REQUEST_NUMBER/merge
git checkout FETCH_HEAD
```

Replace `PULL_REQUEST_NUMBER` with the number of your pull request.

For information about how {% data variables.product.prodname_actions %} uses the merge branch, see [AUTOTITLE](/actions/reference/workflows-and-actions/events-that-trigger-workflows#how-the-merge-branch-affects-your-workflow).

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

* Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
* Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. As a result, the merge base used for the comparison might be different.

## Collaborative development models

The way you use pull requests depends on the type of development model you use in your project. You can use the fork and pull model or the shared repository model.

### Fork and pull model

In the fork and pull model, anyone can fork an existing ("upstream") repository if they have read access and the owner of the upstream repository allows it. Be aware that a fork and its upstream share the same Git data. This means that all content uploaded to a fork is accessible from the upstream and all other forks of that upstream.

You do not need permission from the upstream repository to push to a fork you created. You can optionally allow anyone with push access to the upstream repository to make changes to your pull request branch. This model is popular with open-source projects because it reduces friction for new contributors and lets people work independently without upfront coordination.

> [!TIP]
> {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

### Shared repository model

In the shared repository model, collaborators have push access to a single shared repository and create topic branches when they need to make changes. Pull requests are useful in this model because they start code review and general discussion about a set of changes before the changes are merged into the main development branch. This model is more common with small teams and organizations collaborating on private projects.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
