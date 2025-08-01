---
title: Configuring authentication and provisioning with Entra ID
shortTitle: Set up Entra ID
intro: 'You can use a tenant in Microsoft Entra ID (previously known as Azure AD) as an identity provider (IdP) to centrally manage authentication and user provisioning for {% data variables.location.product_location %}.'
permissions: Site administrators with admin access to the IdP
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-entra-id
  - /admin/managing-iam/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-entra-id
---

{% data reusables.scim.ghes-beta-note %}

## About authentication and user provisioning with Entra ID

Entra ID is a service from Microsoft that allows you to centrally manage user accounts and access to web applications. For more information, see [What is Microsoft Entra ID?](https://learn.microsoft.com/entra/fundamentals/whatis) in the Microsoft Docs.

{% data reusables.saml.idp-saml-and-scim-explanation %}

For more information, see [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes).

## Prerequisites

The general prerequisites for using SCIM on {% data variables.product.prodname_ghe_server %} apply. See the "Prerequisites" section in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#prerequisites).

In addition:

* To configure SCIM, you must have completed **steps 1 to 4** in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).
  * You will need the {% data variables.product.pat_v1 %} created for the setup user to authenticate requests from Entra ID.

* To configure authentication and user provisioning using Entra ID, you must have an Entra ID account and tenant. For more information, see the [Entra ID website](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) and [Quickstart: Set up a tenant](https://learn.microsoft.com/entra/identity-platform/quickstart-create-new-tenant) in the Microsoft Docs.

## 1. Configure SAML

>[!NOTE] Even if you have previously configured SAML on Entra ID, you will need to configure SAML and SCIM on a **new application** to enable SCIM provisioning.

Before starting this section, ensure you have followed steps **1 and 2** in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).

### In Entra ID

1. Create the "{% data variables.product.prodname_ghe_server %}" application in Entra ID. For instructions, see the "Adding {% data variables.product.prodname_ghe_server %} from the gallery" section in Microsoft's guide [Tutorial: Microsoft Entra SSO integration with GitHub Enterprise Server](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-ae-tutorial#adding-github-enterprise-server-from-the-gallery).

   >[!NOTE] Do **not** use the application labeled "(Legacy)."

1. In the "{% data variables.product.prodname_ghe_server %}" application settings, click **Single sign-on** in the left sidebar, then click **SAML**.
1. In the "Basic SAML Configuration" section, click **Edit**, then add the following details.

   * "Identifier": your {% data variables.product.prodname_ghe_server %} host URL (`https://HOSTNAME.com`)
   * "Reply URL": your host URL, followed by `/saml/consume` (`https://HOSTNAME.com/saml/consume`)

1. In the "SAML certificates" section, download the SAML certificate (Base64).
1. In the "Set up {% data variables.product.prodname_ghe_server %}" section, make a note of the Login URL and Microsoft Entra Identifier.

### On {% data variables.product.prodname_ghe_server %}

1. Sign in to {% data variables.product.prodname_ghe_server %} as a user with access to the Management Console.
1. Configure SAML using the information you have gathered. See [AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).

## 2. Configure SCIM

Before starting this section, ensure you have followed steps **1 to 4** in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).

1. In the "{% data variables.product.prodname_ghe_server %}" application in Entra ID, click **Provisioning** in the left sidebar, then click **Get started**.
1. Select the "Automatic" provisioning mode.
1. In the "Admin Credentials" section, add the following details.

   * "Tenant URL": your {% data variables.product.prodname_ghe_server %} host URL, followed by `/api/v3/scim/v2` (`https://HOSTNAME.com/api/v3/scim/v2`)
   * "Secret Token": the {% data variables.product.pat_v1 %} created for the setup user
1. Click **Test Connection**.
1. When the test is complete, click **Save**.
1. Navigate back to the "Overview" page.
1. To provision your EntraID users to your {% data variables.product.prodname_ghe_server %} appliance, Click **Start provisioning**.

When you have finished configuring SCIM, you may want to disable some SAML settings you enabled for the configuration process. See [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#6-disable-optional-settings).
