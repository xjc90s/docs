---
title: Committing changes to a pull request branch created from a fork
intro: You can commit changes on a pull request branch that was created from a fork of your repository with permission from the pull request creator.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Commit to PR branch from fork
category:
  - Create pull requests
---
You can make commits only on pull request branches that:
* Are opened in a repository that you have push access to and were created from a fork of that repository
* Are on a user-owned fork
* Have permission from the pull request creator
* Don't have [branch restrictions](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#restrict-who-can-push-to-matching-branches) that prevent you from committing

Only the user who created the pull request can give you permission to push commits to the user-owned fork. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

> [!NOTE]
> You can also make commits to a pull request branch from a fork of your repository through {% data variables.location.product_location %}. To do this, create your own copy (or fork) of the fork of your repository. Then, commit changes to the same head branch where the original pull request changes were created. For some general guidelines, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

1. On {% data variables.product.github %}, navigate to the main page of the fork (or copy of your repository) where the pull request branch was created.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}

   > [!TIP]
   > If you prefer to clone the fork using {% data variables.product.prodname_desktop %}, then see [AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop).

1. Change the current working directory to the location where you want to download the cloned directory.

   ```shell
   cd open-source-projects
   ```

1. Type `git clone`, then paste the URL you copied in Step 3.

   ```shell
   git clone https://{% data variables.product.product_url %}/USERNAME/FORK-OF-THE-REPOSITORY
   ```

1. Press **Enter**. Git creates your local clone.

   ```shell
   $ git clone https://{% data variables.product.product_url %}/USERNAME/FORK-OF-THE-REPOSITORY
   > Cloning into `FORK-OF-THE-REPOSITORY`...
   > remote: Counting objects: 10, done.
   > remote: Compressing objects: 100% (8/8), done.
   > remove: Total 10 (delta 1), reused 10 (delta 1)
   > Unpacking objects: 100% (10/10), done.
   ```

   > [!TIP]
   > The error message "fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory" means that your current working directory already contains a repository with the same name. To resolve the error, you must clone the fork in a different directory.

1. Navigate into your new cloned repository.

   ```shell
   cd FORK-OF-THE-REPOSITORY
   ```

1. Switch to the compare branch of the pull request where the original changes were made. To find the compare branch, navigate to the original pull request and check the top of the pull request.

   In this example, the compare branch is `test-branch`:

   ```shell
   git checkout TEST-BRANCH
   ```

   > [!TIP]
   > For more information about pull request branches, including examples, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#changing-the-branch-range-and-destination-repository).

1. Make any needed changes to this branch. You can push new commits to it, run local tests, or merge other branches into the branch.
1. After you commit your changes to the head branch of the pull request, push your changes directly to the original pull request. In this example, the head branch is `test-branch`:

   ```shell
   $ git push origin test-branch
   > Counting objects: 32, done.
   > Delta compression using up to 8 threads.
   > Compressing objects: 100% (26/26), done.
   > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
   > Total 29 (delta 8), reused 0 (delta 0)
   > To https://{% data variables.product.product_url %}/USERNAME/FORK-OF-THE-REPOSITORY.git
   > 12da2e9..250e946  TEST-BRANCH -> TEST-BRANCH
   ```

Your new commits appear on the original pull request on {% data variables.location.product_location %}.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
