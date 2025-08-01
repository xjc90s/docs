You can grant certain roles, teams, or apps bypass permissions {% ifversion push-rule-delegated-bypass %} as well as the ability to approve bypass requests {% endif %} for your ruleset. The following are eligible for bypass access:

* Repository admins, organization owners, and enterprise owners
* The maintain or write role, or custom repository roles based on the write role
* Teams, excluding secret teams. See [AUTOTITLE](/organizations/organizing-members-into-teams/about-teams#team-visibility).
{%- ifversion ghes %}
* Deploy keys
{%- endif %}
* {% data variables.product.prodname_github_apps %}
* {% data variables.product.prodname_dependabot %}. For more information about {% data variables.product.prodname_dependabot %}, see [AUTOTITLE](/code-security/getting-started/dependabot-quickstart-guide).

1. To grant bypass permissions for the ruleset, in the "Bypass list" section, click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add bypass**.
1. In the "Add bypass" modal dialog that appears, search for the role, team, or app you would like to grant bypass permissions, then select the role, team, or app from the "Suggestions" section and click **Add Selected**.
