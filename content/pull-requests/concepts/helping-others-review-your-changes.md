---
title: Helping others review your changes
intro: You can use pull requests to provide clear context for your changes and keep your team informed, improving collaboration and the quality of reviews.
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/getting-started/best-practices-for-pull-requests
  - /pull-requests/collaborating-with-pull-requests/getting-started/helping-others-review-your-changes
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Help others review your changes
category:
  - Create pull requests
contentType: concepts
---

When you create a pull request, you’re asking your team to review your changes and provide feedback. Pull requests that are focused, clear, and easy to follow help reviewers give better feedback and make confident decisions.

## Making your changes easy to review

Clear context helps reviewers quickly understand what changed and why it matters. It reduces back-and-forth, makes review faster, and helps your team focus on the most important parts of the change. For information on creating a pull request, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

### Write small pull requests

Small, focused pull requests are easier to review and safer to merge. They help reviewers understand the purpose of the change, spot issues more quickly, and follow the history of the project later.

When a change grows large, consider splitting it into smaller pull requests that each serve one purpose.

### Provide context and guidance

A clear title and description help reviewers understand the problem, the approach, and the result. Good context often explains why the change is needed, what changed, and where reviewers should pay special attention.

Guidance is especially helpful when a pull request touches many files or requires a specific review order. For example, you can point reviewers to the most important files first or explain what type of feedback would be most useful.{% ifversion copilot %} You can also use {% data variables.product.prodname_copilot %} to generate a summary of your pull request, as described later in this article.{% endif %}

### Review your own pull request first

Reviewing your own pull request before asking others to review it helps you catch mistakes early. It also shows reviewers that the pull request is ready for their attention.

A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run.

### Review for security

Security review helps catch risk before a pull request is merged. This is especially important when a pull request changes dependencies, authentication, permissions, workflows, or code that handles sensitive data.

{% data variables.product.github %} can surface security information in pull requests, such as dependency changes, dependency review results, and {% data variables.product.prodname_code_scanning %} checks. Use these signals to resolve issues early or to highlight risks that need reviewer attention. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request), [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#about-the-dependency-review-action), and [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#about-code-scanning-as-a-pull-request-check).{% ifversion code-scanning-autofix %} If your repository has set up {% data variables.product.prodname_code_scanning %} as a pull request check, {% data variables.copilot.copilot_autofix %} can suggest fixes for security vulnerabilities. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#working-with-copilot-autofix-suggestions-for-alerts-on-a-pull-request).{% endif %}

## Keeping your team informed

Pull requests can do more than document code changes—they’re also a way to keep your team and manager informed about the status of your work. Visible progress helps reduce separate status updates and keeps everyone aligned.

{% ifversion copilot %}

### Use {% data variables.product.prodname_copilot %} to generate pull request summaries

> [!NOTE] {% data reusables.copilot.copilot-requires-subscription %}

{% data variables.product.prodname_copilot_short %} can generate a pull request summary on {% data variables.product.github %}. A generated summary can help reviewers understand the main changes, but you should review it carefully and add context that only you know.

Summaries are most useful when they explain the purpose of the change, call out important files, and highlight anything reviewers should examine closely. For instructions, see [AUTOTITLE](/copilot/using-github-copilot/creating-a-pull-request-summary-with-github-copilot).

> [!TIP] You can also use {% data variables.copilot.copilot_chat_short %} to turn your work into a discussion or blog post. See [AUTOTITLE](/copilot/copilot-chat-cookbook/documenting-code/writing-discussions-or-blog-posts).

{% endif %}

### Link to related issues or projects

Connecting a pull request to issues or projects shows how the work fits into the larger project. Links help reviewers understand priority, track progress, and find related discussions.

Use issue-closing keywords when a pull request should close an issue after merging. You can also link to {% data variables.product.prodname_projects_v2 %} so people can track work in one place. For more information, see [AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) and [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

### Highlight the status with labels

Status labels help reviewers understand whether a pull request is ready for review, blocked, or still in progress. Clear labels make it easier for people to prioritize reviews and avoid reviewing work before it is ready. For more information, see [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels).
