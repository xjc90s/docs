---
title: Requesting a pull request review
intro: After you create a pull request, you can ask a specific person to review the changes you've proposed. If you're an organization member, you can also request a specific team to review your changes.
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Request a PR review
category:
  - Create pull requests
contentType: how-tos
---

To request a review, you need write access to the repository. You can request a review from a person or team with read access to the repository, and they receive a notification. Pull request authors can request reviews only if they are repository owners or collaborators with write access.

{% ifversion copilot %}

## Requesting reviews from collaborators and organization members

{% endif %}

Suggested reviewers are based on [git blame data](/repositories/working-with-files/using-files/viewing-a-file). After someone reviews your pull request and you make changes, you can request another review from the same reviewer.

{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request that you want a specific person or team to review.
1. To request a review from a suggested person under **Reviewers**, next to their username, click **Request**.

   ![Screenshot of the "Reviewers" section of a pull request's sidebar. To the right of @octocat, a "Request" link is outlined in dark orange.](/assets/images/help/pull_requests/request-suggested-review.png)

1. Optionally, to request a review from someone other than a suggested person, click **Reviewers**.

   If you know the name of the person or team you want a review from, type the username of the person or the name of the team you're asking to review your changes. Click their team name or username to request a review.

1. After your pull request is reviewed and you make the necessary changes, you can ask a reviewer to review your pull request again. Navigate to **Reviewers** in the right sidebar and click {% octicon "sync" aria-label="Re-request review" %} next to the reviewer's name whose review you want.

   ![Screenshot of the "Reviewers" section of a pull request's sidebar. To the right of @octocat, a sync icon is outlined in dark orange.](/assets/images/help/pull_requests/request-re-review.png)

{% ifversion copilot %}

## Requesting a review from {% data variables.product.prodname_copilot %}

You can also request that {% data variables.product.prodname_copilot_short %} review your code and provide feedback and suggested changes on your work. See [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review).

{% endif %}

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
