---
title: About permissions and visibility of forks
shortTitle: Permissions and visibility
intro: 'The permissions and visibility of forks depend on whether the upstream repository is public or private, {% ifversion fpt %}and whether it is owned by an organization{% else %}whether it is owned by an organization, and the policies of your enterprise{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Work with forks
---

## About permissions for creating forks

{% data reusables.repositories.you-can-fork %}

* If you fork a private repository that belongs to a personal account, external collaborators also get access to the fork.
* If you fork a private {% ifversion ghec or ghes %}or internal {% endif %}repository that belongs to an organization, teams within the organization get access to the fork, but external collaborators do not.
* {% ifversion ghes %} You can add an external collaborator to a fork of a private repository that belongs to an organization if you are an owner of that organization or if your organization allows repository administrators to invite external collaborators.{% endif %}{% ifversion fpt or ghec %} You can add an external collaborator to a fork of a private repository owned by an organization if you are an organization owner, or if your organization allows repository administrators to invite external collaborators, and the external collaborator also has access to the upstream repository.{% endif %}
{% ifversion ghec or ghes %} * You can add an external collaborator to a fork of an internal repository that belongs to an organization if the external collaborator also has access to the upstream repository.{% endif %}

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, additional restrictions apply to the repositories you can fork. {% ifversion ghec %}{% data reusables.enterprise-accounts.emu-forks %}{% endif %} For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{% endif %}

Organizations can allow or prevent the forking of any private repositories owned by the organization{% ifversion ghec or ghes %}. Enterprises can also enforce policies to specify where members can create forks of private or internal repositories. Policies control the options available to the enterprise's organizations{% endif %}. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization){% ifversion fpt %}.{% else %} and [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories).{% endif %}

## About visibility of forks

A fork is a new repository that shares code and visibility settings with the upstream repository. All forks of public repositories are public. You cannot change the visibility of a fork.

All repositories belong to a repository network. A repository network contains the upstream repository, the upstream repository's direct forks, and all forks of those forks. All forks in the repository network have the same visibility setting. For more information, see [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories).

Deleting a repository or changing its visibility settings affects the repository's forks. For more information, see [What happens to forks when a repository is deleted or changes visibility](#what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility).

If you delete a fork, any code contributions from that fork remain accessible to the repository network.

## What happens to forks when a repository is deleted or changes visibility

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

### Deleting a private repository

When you delete a private repository, all of its private forks are also deleted.

### Deleting a public repository

When you delete a public repository, the oldest active public fork is chosen to be the new upstream repository. All other repositories are forked from this new upstream, and subsequent pull requests go to this new upstream repository.

### Changing a public repository to a private repository

If a public repository is made private, its public forks are split off into a new network. As with deleting a public repository, one of the existing public forks is chosen to be the new upstream repository. All other repositories are forked from this new upstream, and subsequent pull requests go to this new upstream repository.

In other words, a public repository's forks will remain public in their own separate repository network even after the upstream repository is made private. This allows the fork owners to continue to work and collaborate without interruption. If public forks were not moved into a separate network in this way, the owners of those forks would need to get the appropriate [access permissions](/get-started/learning-about-github/access-permissions-on-github) to pull changes from and submit pull requests to the (now private) upstream repository—even though they didn't need those permissions before.

> [!WARNING]
> * Making a public repository private will permanently remove stars and watchers associated with users who will no longer have access to this repository. If you decide to make the repository public in the future, you cannot restore these stars and watchers, and this will affect its repository rankings.
> * Dependency graph and {% data variables.product.prodname_dependabot_alerts %} will remain enabled with permission to perform read-only analysis on this repository. Any custom {% data variables.product.prodname_dependabot %} alert rules will be disabled unless {% data variables.product.prodname_code_security %} is enabled for this repository.
> * {% data variables.product.prodname_code_scanning_caps %} will become unavailable unless {% data variables.product.prodname_code_security %} is enabled for this repository.
> * Current forks will remain public and will be detached from this repository.

{% ifversion ghes %}
If a public repository has anonymous Git read access enabled and the repository is made private, all of the repository's forks will lose anonymous Git read access and return to the default disabled setting. If a forked repository is made public, repository administrators can re-enable anonymous Git read access. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).
{% endif %}

#### Deleting the private repository

If a public repository is made private and then deleted, its public forks will continue to exist in a separate network.

### Changing a private repository to a public repository

When a private repository is made public, all the commits in that repository become visible to everyone. This includes any commits previously pushed to private forks of that repository.

Any previously created private forks will remain private but will become disconnected from the original repository that was made public. Each private fork will become a separate private repository and create its own independent network of repositories. Any new changes made to these networks will not be accessible from the original repository that was made public.

#### Deleting the public repository

If a private repository is made public and then deleted, its private forks will continue to exist as standalone private repositories in separate networks.

{% ifversion ghes or ghec %}

### Changing the visibility of an internal repository

If the policy for your enterprise permits forking, any fork of an internal repository will be private. If you change the visibility of an internal repository, any fork owned by an organization or personal account will remain private.

#### Deleting the internal repository

If you change the visibility of an internal repository and then delete the repository, the forks will continue to exist in a separate network.

{% endif %}

## About permissions of forks

{% data reusables.repositories.private_forks_inherit_permissions %}

Public forks do not inherit the permissions structure of the upstream repository.

When you fork a public repository to your personal account, you can allow repository maintainers to push to your pull request branch. This includes giving them permission to make commits or delete the branch.

This speeds up collaboration by letting maintainers:
* Make direct commits to your branch
* Run tests locally before merging

You cannot give push permissions to a fork owned by an organization.

For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

### About push rulesets for forked repositories

{% data reusables.repositories.rulesets-push-rulesets-fork-network-information %}

For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets).

### Important security considerations

If you work with forks, or if you're the owner of a repository or organization that allows forking, it's important to be aware of the following security considerations.

* Forks have their own permissions separate from the upstream repository.
* The owners of a repository that has been forked have read permission to all forks in the repository's network.
* Organization owners of a repository that has been forked have admin permission to forks created in personal user namespaces, including the ability to delete the fork and its branches.
* Organization owners of a repository that has been forked have read permission to forks created in organizations, but do not have the ability to delete the fork or its branches.
* Forks created in another organization will not be deleted when individual access is removed from the upstream repository.
* Commits to any repository in a network can be accessed from any repository in the same network, including the upstream repository, even after a fork is deleted.

### About forks within an organization

Forks within the same organization copy the collaborators and team settings of their upstream repositories. If a repository is owned by an organization:

* That organization controls the permissions of its forks.
* Any teams from the upstream permission structure that exist and are visible in the target organization or user namespace will have their permissions copied.
* Admin permissions remain with the upstream owner, except when a user forks into a different organization.
* If that repository is forked to a user namespace, the organization maintains admin permissions and any teams with access maintain access.

{% ifversion ghec or ghes %}

### About forks within an enterprise

Internal repositories only support a single level of forking. You cannot fork a private fork of an internal repository. This is intentional to simplify access and management for internal repositories, which have enterprise-wide access. This differs from the behavior of public and private repositories, which allow nested forking.

{% endif %}

## Further reading

* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)
* [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)
