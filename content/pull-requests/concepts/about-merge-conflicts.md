---
title: About merge conflicts
intro: Merge conflicts happen when you merge branches that have competing commits, and Git needs your help to decide which changes to incorporate in the final merge.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
  - /github/about-merge-conflicts
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
category:
  - Merge and close pull requests
contentType: concepts
---

Git can often resolve differences between branches and merge them automatically. Usually, changes are on different lines or in different files, so Git can merge them without help. Sometimes, competing changes need your help. Merge conflicts often happen when people make different changes to the same line of the same file, or when one person edits a file and another person deletes the same file.

Merge conflicts block merging because Git cannot safely choose which version of the conflicting content to keep. You must resolve all merge conflicts before you can merge a pull request on {% data variables.product.github %}. If your pull request has a merge conflict between the compare branch and base branch, the **Merge pull request** button is deactivated until the conflicts are resolved.

## Resolving merge conflicts

Resolving a merge conflict means choosing the final content that should appear after the branches are merged. The right tool depends on the type of conflict.

* Simple line conflicts can often be resolved on {% data variables.product.github %}. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).
* More complex conflicts must be resolved in a local clone and pushed back to the pull request branch. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).
{% ifversion copilot %}
* If you have access to {% data variables.copilot.copilot_cloud_agent %} and it is enabled for the repository, {% data variables.product.prodname_copilot_short %} can help resolve conflicts from the merge box. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/make-changes-to-an-existing-pr#resolving-merge-conflicts).
{% endif %}

On the command line, Git tells you when a merge cannot finish automatically. You cannot push the merged result until you resolve the conflict and commit the resolution.

```shell
$ git merge BRANCH-NAME
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)
