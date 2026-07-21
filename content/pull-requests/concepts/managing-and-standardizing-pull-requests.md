---
title: Managing and standardizing pull requests
intro: Use these steps to manage and standardize the pull requests that contributors create in your repository.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Manage and standardize pull requests
category:
  - Create pull requests
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/getting-started/managing-and-standardizing-pull-requests
contentType: concepts
---

If you maintain a repository, you can use {% data variables.product.github %} features to make pull requests more consistent and easier to review. Standardization helps contributors know what information to provide, helps reviewers focus on the right changes, and helps protect important branches from accidental or risky merges.

## Using pull request templates

Pull request templates help contributors provide the context your project needs for review. A template can prompt authors to explain the purpose of the change, link related issues, include testing notes, or complete a checklist before requesting review.

Templates are useful when many contributors open pull requests or when your project has review expectations that should be visible every time. For more information, see [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository), [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists), and [AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

## Defining code owners

Code owners identify the people or teams responsible for specific files or directories. When a pull request changes owned code, {% data variables.product.github %} can automatically request a review from the right owners.

Code owners help route reviews to people with the right context. They are especially useful for sensitive areas such as security files, deployment configuration, or shared libraries. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

## Using protected branches

Protected branches help keep important branches, such as `main`, stable. They can require conditions such as passing status checks, signed commits, or approving reviews before a pull request can merge.

Use protected branches when a branch represents production code, a release line, or another important source of truth. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

## Using rulesets

Rulesets let you enforce repository policies across branches and tags. They can require status checks, workflows, pull request reviews, or other conditions before changes are accepted.

Rulesets are useful when you want consistent rules across multiple branches or when you want to combine review requirements with automated security checks, such as dependency review or {% data variables.product.prodname_code_scanning %} merge protection. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets), [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/enforcing-dependency-review-across-an-organization), and [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/set-code-scanning-merge-protection).

## Using push rulesets

{% data reusables.repositories.push-rulesets-overview %}

Push rulesets help block risky content before it enters the repository. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets).

## Using automated tools to review code styling

Automated tools, such as linters and formatters, help keep code style consistent across pull requests. They can catch small issues automatically so reviewers can focus on design, correctness, and maintainability.

You can run these tools as part of a continuous integration workflow with {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration).
