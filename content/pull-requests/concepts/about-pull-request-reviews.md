---
title: About pull request reviews
intro: Collaborate on pull requests to improve code quality.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: About PR reviews
category:
  - Review pull requests
contentType: concepts
---

Pull request reviews are one of the main ways people collaborate on {% data variables.product.github %}. Reviewers can comment on changes, suggest improvements, and approve or request changes before code is merged. This process helps teams maintain code quality and share knowledge.

{% raw %}<a href="https://github.com/pulls/review-requested?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>View pull requests awaiting your review</span></a>{% endraw %}

## Reviewing pull requests

Anyone with read access can review and comment on proposed changes. Reviews help authors improve their work and help maintainers decide whether a pull request is ready to merge.

A review can leave general feedback, approve the pull request, or request changes that should be addressed before merging. Reviewers can also comment on specific lines, suggest changes, and discuss implementation details. Review conversations appear in the pull request timeline so the team can track feedback and decisions.

## Requesting and requiring reviews

Repository owners and collaborators can request reviews from specific people or teams when they need feedback from the right experts. If you define code owners in a CODEOWNERS file, {% data variables.product.github %} can automatically request review from owners when a pull request changes their code. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).

Repository administrators can require approvals before pull requests are merged. Required reviews help protect important branches and reduce accidental merges. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging).

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)
* Learn more in the [Review pull requests](https://github.com/skills/review-pull-requests?ref_product=github&ref_type=engagement&ref_style=text) {% data variables.product.prodname_learning %} course
