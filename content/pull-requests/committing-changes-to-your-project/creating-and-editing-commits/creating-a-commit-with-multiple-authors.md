---
title: Creating a commit with multiple authors or on behalf of an organization
allowTitleToDifferFromFilename: true
intro: 'You can attribute a commit to more than one author, or to an organization, by adding trailers to the commit''s message.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
  - /pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Multiple authors or an org
category:
  - Commit changes
---

## Creating a commit with multiple authors

You can attribute a commit to more than one author by adding one or more `Co-authored-by` trailers to the commit's message. Co-authored commits are visible on {% data variables.product.github %}{% ifversion ghes %} and can be included in the profile contributions graph and the repository's statistics{% endif %}.

### Required co-author information

Before you can add a co-author to a commit, you must know the appropriate email to use for each co-author. For the co-author's commit to count as a contribution, you must use the email associated with their account on {% data variables.location.product_location %}.

{% ifversion fpt or ghec %}

If a person chooses to keep their email address private, you should use their {% data variables.product.github %}-provided `no-reply` email to protect their privacy. Otherwise, the co-author's email will be available to the public in the commit message. If you want to keep your email private, you can choose to use a {% data variables.product.github %}-provided `no-reply` email for Git operations and ask other co-authors to list your `no-reply` email in commit trailers.

For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

> [!TIP]
> You can help a co-author find their preferred email address by sharing this information:
> * To find your {% data variables.product.github %}-provided `no-reply` email, navigate to your email settings page under "Keep my email address private."
> * To find the email you used to configure Git on your computer, run `git config user.email` on the command line.

{% endif %}

### Creating co-authored commits using {% data variables.product.prodname_desktop %}

You can use {% data variables.product.prodname_desktop %} to create a commit with a co-author. For more information, see [AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes) and [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

### Creating co-authored commits on the command line

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Type your commit message and a short, meaningful description of your changes. After your commit description, instead of a closing quotation, add an empty line.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   ```

   > [!TIP]
   > If you're using a text editor on the command line to type your commit message, ensure there is a blank line (two consecutive newlines) between the end of your commit description and the `Co-authored-by:` commit trailer.

1. On the next line of the commit message, type `Co-authored-by: name <name@example.com>` with specific information for each co-author. After the co-author information, add a closing quotation mark.

   If you're adding multiple co-authors, give each co-author their own line and `Co-authored-by:` commit trailer. Do not add blank lines between each co-author line.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   > Co-authored-by: NAME <NAME@EXAMPLE.COM>
   > Co-authored-by: ANOTHER-NAME <ANOTHER-NAME@EXAMPLE.COM>"
   ```

The new commit and message will appear on {% data variables.location.product_location %} the next time you push. For more information, see [AUTOTITLE](/get-started/using-git/pushing-commits-to-a-remote-repository).

### Creating co-authored commits on {% data variables.product.github %}

After you've made changes in a file using the web editor on {% data variables.product.github %}, you can create a co-authored commit by adding a `Co-authored-by:` trailer to the commit's message.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
1. Click **Commit changes...**
1. In the "Commit message" field, type a short, meaningful commit message that describes the changes you made.
1. In the text box below your commit message, add `Co-authored-by: name <name@example.com>` with specific information for each co-author. If you're adding multiple co-authors, give each co-author their own line and `Co-authored-by:` commit trailer.
1. Click **Commit changes** or **Propose changes**.

The new commit and message will appear on {% data variables.location.product_location %}.

{% ifversion fpt or ghec %}

## Creating a commit on behalf of an organization

You can create commits on behalf of an organization by adding a trailer to the commit's message. Commits attributed to an organization include an `on-behalf-of` badge on {% data variables.product.github %}.

To create commits on behalf of an organization:

* You must be a member of the organization indicated in the trailer.
* You must sign the commit.
* Your commit email and the organization email must be in a domain verified by the organization.
* Your commit message must end with the commit trailer `on-behalf-of: @org <name@organization.com>`.
  * `org` is the organization's login.
  * `name@organization.com` is in the organization's domain.

Organizations can use the `name@organization.com` email as a public point of contact for open source efforts.

### Creating commits with an `on-behalf-of` badge on the command line

1. Type your commit message and a short, meaningful description of your changes. After your commit description, instead of a closing quotation, add two empty lines.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   ```

   > [!TIP]
   > If you're using a text editor on the command line to type your commit message, ensure there are two newlines between the end of your commit description and the `on-behalf-of:` commit trailer.

1. On the next line of the commit message, type `on-behalf-of: @org <name@organization.com>`, then a closing quotation mark.

   ```shell
   $ git commit -m "Refactor usability tests.
   >
   >
   on-behalf-of: @ORG NAME@ORGANIZATION.COM"
   ```

The new commit, message, and badge will appear on {% data variables.product.prodname_dotcom %} the next time you push. For more information, see [AUTOTITLE](/get-started/using-git/pushing-commits-to-a-remote-repository).

### Creating commits with an `on-behalf-of` badge on {% data variables.product.github %}

After you've made changes in a file using the web editor on {% data variables.product.github %}, you can create a commit on behalf of your organization by adding an `on-behalf-of:` trailer to the commit's message.

1. Click **Commit changes...**
1. In the "Commit message" field, type a short, meaningful commit message that describes the changes you made.
1. In the text box below your commit message, add `on-behalf-of: @org <name@organization.com>`.
1. Click **Commit changes** or **Propose changes**.

The new commit, message, and badge will appear on {% data variables.product.prodname_dotcom %}.

{% endif %}

## Further reading

* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile)
* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile)
* [AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors)
* [AUTOTITLE](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
* [AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes) in the {% data variables.product.prodname_desktop %} documentation
