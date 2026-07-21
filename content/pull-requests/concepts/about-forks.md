---
title: About forks
intro: A fork is a new repository that shares code and visibility settings with the original "upstream" repository.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Work with forks
contentType: concepts
---

## About forks

Forks are repositories that start as copies of another repository, called the upstream repository. They let you make changes in your own space without affecting the original project. If the upstream repository accepts your changes, you can propose them with a pull request.

Forks are useful when you want to:

* Contribute to a project where you do not have write access
* Experiment with changes without affecting the upstream repository
* Explore a new direction that might become independent later
* Keep discussion, issues, and pull requests separate from the upstream project

When you view a forked repository on {% data variables.product.github %}, the upstream repository is indicated below the name of the fork.

![Screenshot of a repository's page on GitHub. Below the name of the repository, "mona/docs", the text "forked from github/docs" is outlined in orange.](/assets/images/help/pull_requests/fork-path.png)

For instructions on creating a fork, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

## What makes forks distinct from branches

A branch is part of one repository. A fork is a separate repository with its own settings and collaboration space.

Each fork can have its own:

* Branches
* Members and discussions
* Issues and pull requests
* Actions and projects
* Tags, labels, and wikis

Because forks are separate repositories, they give contributors more independence than branches. Because they stay connected to the upstream repository, changes can still flow back through pull requests.

## When to use a fork

A fork is often the best choice when you need independence from the upstream repository. This is common in open source projects, where contributors may not have write access to the upstream repository.

A branch may be simpler when you are collaborating in a shared repository and already have permission to push branches. For more information about branches, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).

## Which repositories can be forked?

{% data reusables.repositories.you-can-fork %}

Repository, organization, and enterprise policies can limit whether repositories can be forked and where forks can be created. For private{% ifversion ghec or ghes %} and internal{% endif %} repositories, access to forks also depends on repository visibility, organization membership, and administrator settings.

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, additional restrictions apply to the repositories you can fork. {% ifversion ghec %}{% data reusables.enterprise-accounts.emu-forks %}{% endif %} For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{% endif %}

For more information about policy settings, see [AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization){% ifversion fpt %}.{% else %} and [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories).{% endif %}

## About visibility of forks

A fork's visibility is tied to the upstream repository's repository network. Public repository forks are public, and private repository forks are private.{% ifversion ghec or ghes %} Forks of internal repositories are private.{% endif %} You cannot change the visibility of a fork by itself.

All repositories in a repository network share the same visibility setting. A repository network includes the upstream repository, its forks, and forks of those forks. For more information, see [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories).

Deleting a repository or changing its visibility can affect the network. If you delete a fork, code contributions from that fork can remain accessible to the repository network.

## What happens to forks when a repository is deleted or changes visibility

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

Visibility changes can separate forks into new repository networks so that existing fork owners can keep working without unexpected loss of access.

* When a private repository is deleted, its private forks are also deleted.
* When a public repository is deleted, an active public fork becomes the new upstream repository for the network.
* When a public repository is made private, its public forks stay public in a separate network.
* When a private repository is made public, private forks stay private but disconnect into separate private networks.
{% ifversion ghec or ghes %}* When an internal repository changes visibility, forks owned by organizations or personal accounts remain private.{% endif %}

Changing a public repository to private can also affect stars, watchers, dependency graph, {% data variables.product.prodname_dependabot_alerts %}, and {% data variables.product.prodname_code_scanning %} availability. Review repository visibility settings carefully before changing them.

{% ifversion ghes %}
If a public repository has anonymous Git read access enabled and the repository is made private, all of the repository's forks lose anonymous Git read access and return to the default disabled setting. If a forked repository is made public, repository administrators can re-enable anonymous Git read access. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).
{% endif %}

## About permissions of forks

{% data reusables.repositories.private_forks_inherit_permissions %}

Public forks do not inherit the permissions structure of the upstream repository. Fork owners control access to their forks, but repository networks still share Git data. Commits pushed to any repository in a network can be accessible from other repositories in that network, including the upstream repository.

When you fork a public repository to your personal account, you can allow maintainers of the upstream repository to push to your pull request branch. This can help maintainers update your branch, run tests, or resolve small issues before merging. You cannot give push permissions to a fork owned by an organization. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

### About push rulesets for forked repositories

{% data reusables.repositories.rulesets-push-rulesets-fork-network-information %}

For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets).

### Important security considerations

Forks are powerful collaboration tools, but they can expose code and history in ways that are easy to overlook.

* Forks have their own permissions separate from the upstream repository.
* Owners of an upstream repository can read all forks in the repository network.
* Organization owners may have administrative access to forks created in personal namespaces.
* Removing someone's access to the upstream repository does not always delete forks in other organizations.
* Commits can remain accessible in the repository network even after a fork is deleted.

Before allowing forks for sensitive work, review the permissions and visibility model for your repository or organization.

### About forks within an organization

Forks within the same organization copy collaborator and team settings from the upstream repository. The organization controls permissions for these forks, and existing visible teams may keep access.

{% ifversion ghec or ghes %}

### About forks within an enterprise

Internal repositories support a single level of forking. You cannot fork a private fork of an internal repository. This keeps access and management simpler for repositories that are visible across an enterprise.

{% endif %}

## Next steps

For instructions on forking a repository, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).
