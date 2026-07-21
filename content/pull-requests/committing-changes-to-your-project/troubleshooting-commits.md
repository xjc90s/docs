---
title: Troubleshooting commits
shortTitle: Troubleshooting commits
intro: 'Resolve common problems with commits, such as commits linked to the wrong user, commits that are missing from your local clone, and commits blocked by push protection.'
redirect_from:
  - /articles/troubleshooting-commits
  - /github/committing-changes-to-your-project/troubleshooting-commits
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
  - /pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
  - /pull-requests/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
  - /pull-requests/committing-changes-to-your-project/troubleshooting-commits/my-commit-is-blocked-by-push-protection
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Commit changes
---

## Commits are linked to the wrong user

{% data variables.product.github %} uses the email address in the commit header to link the commit to a {% data variables.product.github %} user. If your commits are linked to another user or not linked to any user, you may need to change your local Git configuration settings, add an email address to your account email settings, or do both.

> [!NOTE]
> If your commits are linked to another user, that does not mean the user can access your repository. A user can only access a repository you own if you add them as a collaborator or add them to a team that has access to the repository.

### Commits are linked to another user

If your commits are linked to another user, that means the email address in your local Git configuration settings is connected to that user's {% data variables.product.github %} account. In this case, you can change the email in your local Git configuration settings and add the new email address to your account to link future commits.

1. To change the email address in your local Git configuration, follow the steps in [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git). If you work on multiple machines, you will need to change this setting on each one.
1. Add the email address from step 2 to your account settings by following the steps in [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).

Commits you make from this point forward will be linked to your account.

### Commits are not linked to any user

If your commits are not linked to any user, the commit author's name will not be rendered as a link to a user profile. To check the email address used for those commits and connect commits to your account, follow these steps.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
{% data reusables.repositories.navigate-to-commit %}
1. To read a message about why the commit is not linked, hover over the blue {% octicon "question" aria-label="Question mark" %} to the right of the username.

   * **Unrecognized author (with email address)** If you see this message with an email address, the address you used to author the commit is not connected to your {% data variables.product.github %} account. To link your commits, [add the email address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account). If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.
   * **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your {% data variables.product.github %} account. You will need to [set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.
   * **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address. You will need to [set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.

> [!WARNING]
> If your local Git configuration contained a generic email address, or an email address that was already attached to another user's account, then your previous commits will not be linked to your account. While Git does allow you to change the email address used for previous commits, we strongly discourage this, especially in a shared repository.

## A commit exists on GitHub but not in your local clone

Sometimes a commit will be viewable on {% data variables.product.github %}, but will not exist in your local clone of the repository.

When you use `git show` to view a specific commit on the command line, you may get a fatal error.

For example, you may receive a `bad object` error locally:

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

However, when you view the commit on {% data variables.location.product_location %}, you can see it without any problems:

`github.com/ACCOUNT/REPOSITORY/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

The following explanations are possible:

* The local repository is out of date.
* The branch that contains the commit was deleted, so the commit is no longer referenced.
* Someone force pushed over the commit.

### The local repository is out of date

Your local repository may not have the commit yet. To get information from your remote repository to your local clone, use `git fetch`:

```shell
git fetch REMOTE
```

This safely copies information from the remote repository to your local clone without changing the files you have checked out.

You can use `git fetch upstream` to get information from a repository you've forked. You can use `git fetch origin` to get information from a repository you've only cloned.

> [!TIP]
> For more information, read about [managing remotes and fetching data](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) in the [Pro Git](https://git-scm.com/book) book.

### The branch that contained the commit was deleted

If a collaborator on the repository deleted the branch containing the commit or force pushed over the branch, the missing commit may have been orphaned. This means the commit cannot be reached from any reference, so it will not be fetched into your local clone.

If any collaborator has a local clone of the repository with the missing commit, they can push it back to {% data variables.product.github %}. They need to make sure a local branch references the commit. Then, they can push it as a new branch to {% data variables.product.github %}.

Let's say that the person still has a local branch, called `B`, that contains the commit. This branch might track the branch that was force pushed or deleted, and the person might not have updated it yet. To preserve the commit, they can push that local branch to a new branch, called `recover-B`, on {% data variables.product.github %}. For this example, let's assume they have a remote named `upstream` with push access to `github.com/ACCOUNT/REPOSITORY`.

The other person runs:

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

Now, _you_ can run:

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

### Avoid force pushes

Avoid force pushing to a repository unless absolutely necessary. This is especially true if more than one person can push to the repository. If someone force pushes to a repository, the force push may overwrite commits that other people based their work on. Force pushing changes the repository history and can corrupt pull requests.

## A commit is blocked by push protection

To keep your repository secure, push protection prevents you from accidentally committing secrets to the repository.

### Understanding why push protection has blocked your commit

Leaked secrets can pose serious security risks to your repository and your supply chain. Push protection prevents you from accidentally adding secrets to your codebase, where malicious actors could exploit them.

If the repository you're contributing to on {% data variables.product.github %} is secured by push protection, you'll encounter a push protection block whenever you:

* **Push commits** containing recognized secrets **from the command line** to the remote repository.
* **Commit changes** or upload files containing recognized secrets to a repository in the **{% data variables.product.github %} UI**.
* **Make certain requests** containing recognized secrets in **the REST API**.

### Resolving a push protection block

To resolve the block, you should remove the secret from the commit or request. If you believe the secret is safe to push, you may be able to bypass the block. For more information about how to remove the secret or, if necessary, bypass the block, see:

* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line)
* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui)
* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-rest-api)

## Further reading

* [AUTOTITLE](/search-github/searching-on-github/searching-commits)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)
* ["Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
* ["Data Recovery" from the _Pro Git_ book](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery)
