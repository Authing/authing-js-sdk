const fs = require('fs');
const path = require('path');

module.exports.SendEmail = fs.readFileSync(path.join(__dirname, 'SendEmail.gql'), 'utf8');
module.exports.AddEmailProvider = fs.readFileSync(path.join(__dirname, 'AddEmailProvider.gql'), 'utf8');
module.exports.RemoveEmailProvider = fs.readFileSync(path.join(__dirname, 'RemoveEmailProvider.gql'), 'utf8');
module.exports.UpdateEmailProvider = fs.readFileSync(path.join(__dirname, 'UpdateEmailProvider.gql'), 'utf8');
module.exports.SaveEmailProviderWithClient = fs.readFileSync(path.join(__dirname, 'SaveEmailProviderWithClient.gql'), 'utf8');
module.exports.UpdateEmailTemplateWithClient = fs.readFileSync(path.join(__dirname, 'UpdateEmailTemplateWithClient.gql'), 'utf8');
module.exports.SendEmailByType = fs.readFileSync(path.join(__dirname, 'SendEmailByType.gql'), 'utf8');
module.exports.UseDefaultEmailProvider = fs.readFileSync(path.join(__dirname, 'UseDefaultEmailProvider.gql'), 'utf8');
module.exports.UpdateEmailTemplate = fs.readFileSync(path.join(__dirname, 'UpdateEmailTemplate.gql'), 'utf8');
module.exports.AddOAuthList = fs.readFileSync(path.join(__dirname, 'AddOAuthList.gql'), 'utf8');
module.exports.RemoveOAuthList = fs.readFileSync(path.join(__dirname, 'RemoveOAuthList.gql'), 'utf8');
module.exports.RemoveOAuthProvider = fs.readFileSync(path.join(__dirname, 'RemoveOAuthProvider.gql'), 'utf8');
module.exports.UpdateOAuthList = fs.readFileSync(path.join(__dirname, 'UpdateOAuthList.gql'), 'utf8');
module.exports.UpdateApplicationOAuth = fs.readFileSync(path.join(__dirname, 'UpdateApplicationOAuth.gql'), 'utf8');
module.exports.SetApplicationOAuthEnableOrDisable = fs.readFileSync(path.join(__dirname, 'SetApplicationOAuthEnableOrDisable.gql'), 'utf8');
module.exports.CreateOAuthProvider = fs.readFileSync(path.join(__dirname, 'CreateOAuthProvider.gql'), 'utf8');
module.exports.UpdateOAuthProvider = fs.readFileSync(path.join(__dirname, 'UpdateOAuthProvider.gql'), 'utf8');
module.exports.CreateOIDCApp = fs.readFileSync(path.join(__dirname, 'CreateOIDCApp.gql'), 'utf8');
module.exports.UpdateOIDCApp = fs.readFileSync(path.join(__dirname, 'UpdateOIDCApp.gql'), 'utf8');
module.exports.RemoveOIDCApp = fs.readFileSync(path.join(__dirname, 'RemoveOIDCApp.gql'), 'utf8');
module.exports.CreateSAMLServiceProvider = fs.readFileSync(path.join(__dirname, 'CreateSAMLServiceProvider.gql'), 'utf8');
module.exports.UpdateSAMLServiceProvider = fs.readFileSync(path.join(__dirname, 'UpdateSAMLServiceProvider.gql'), 'utf8');
module.exports.RemoveSAMLServiceProvider = fs.readFileSync(path.join(__dirname, 'RemoveSAMLServiceProvider.gql'), 'utf8');
module.exports.EnableSAMLServiceProvider = fs.readFileSync(path.join(__dirname, 'EnableSAMLServiceProvider.gql'), 'utf8');
module.exports.CreateSAMLIdentityProvider = fs.readFileSync(path.join(__dirname, 'CreateSAMLIdentityProvider.gql'), 'utf8');
module.exports.UpdateSAMLIdentityProvider = fs.readFileSync(path.join(__dirname, 'UpdateSAMLIdentityProvider.gql'), 'utf8');
module.exports.RemoveSAMLIdentityProvider = fs.readFileSync(path.join(__dirname, 'RemoveSAMLIdentityProvider.gql'), 'utf8');
module.exports.EnableSAMLIdentityProvider = fs.readFileSync(path.join(__dirname, 'EnableSAMLIdentityProvider.gql'), 'utf8');
module.exports.CreateDefaultSAMLIdentityProviderSettings = fs.readFileSync(path.join(__dirname, 'CreateDefaultSAMLIdentityProviderSettings.gql'), 'utf8');
module.exports.AddLDAPServer = fs.readFileSync(path.join(__dirname, 'AddLDAPServer.gql'), 'utf8');
module.exports.UpdateLDAPServer = fs.readFileSync(path.join(__dirname, 'UpdateLDAPServer.gql'), 'utf8');
module.exports.RemoveLDAPServer = fs.readFileSync(path.join(__dirname, 'RemoveLDAPServer.gql'), 'utf8');
module.exports.LoginByLDAP = fs.readFileSync(path.join(__dirname, 'LoginByLDAP.gql'), 'utf8');
module.exports.ClearAvatarSrc = fs.readFileSync(path.join(__dirname, 'ClearAvatarSrc.gql'), 'utf8');
module.exports.RevokeUserAuthorizedApp = fs.readFileSync(path.join(__dirname, 'RevokeUserAuthorizedApp.gql'), 'utf8');
module.exports.UpdateSystemPricing = fs.readFileSync(path.join(__dirname, 'UpdateSystemPricing.gql'), 'utf8');
module.exports.AddSystemPricing = fs.readFileSync(path.join(__dirname, 'AddSystemPricing.gql'), 'utf8');
module.exports.order = fs.readFileSync(path.join(__dirname, 'order.gql'), 'utf8');
module.exports.ContinuePay = fs.readFileSync(path.join(__dirname, 'ContinuePay.gql'), 'utf8');
module.exports.IncClientFlowNumber = fs.readFileSync(path.join(__dirname, 'IncClientFlowNumber.gql'), 'utf8');
module.exports.register = fs.readFileSync(path.join(__dirname, 'register.gql'), 'utf8');
module.exports.createUser = fs.readFileSync(path.join(__dirname, 'createUser.gql'), 'utf8');
module.exports.login = fs.readFileSync(path.join(__dirname, 'login.gql'), 'utf8');
module.exports.updateUser = fs.readFileSync(path.join(__dirname, 'updateUser.gql'), 'utf8');
module.exports.removeUsers = fs.readFileSync(path.join(__dirname, 'removeUsers.gql'), 'utf8');
module.exports.newClient = fs.readFileSync(path.join(__dirname, 'newClient.gql'), 'utf8');
module.exports.removeUserClients = fs.readFileSync(path.join(__dirname, 'removeUserClients.gql'), 'utf8');
module.exports.updateUserClient = fs.readFileSync(path.join(__dirname, 'updateUserClient.gql'), 'utf8');
module.exports.changePassword = fs.readFileSync(path.join(__dirname, 'changePassword.gql'), 'utf8');
module.exports.sendResetPasswordEmail = fs.readFileSync(path.join(__dirname, 'sendResetPasswordEmail.gql'), 'utf8');
module.exports.verifyResetPasswordVerifyCode = fs.readFileSync(path.join(__dirname, 'verifyResetPasswordVerifyCode.gql'), 'utf8');
module.exports.sendVerifyEmail = fs.readFileSync(path.join(__dirname, 'sendVerifyEmail.gql'), 'utf8');
module.exports.generateInvitationCode = fs.readFileSync(path.join(__dirname, 'generateInvitationCode.gql'), 'utf8');
module.exports.refreshAppSecret = fs.readFileSync(path.join(__dirname, 'refreshAppSecret.gql'), 'utf8');
module.exports.updateSuperAdminUser = fs.readFileSync(path.join(__dirname, 'updateSuperAdminUser.gql'), 'utf8');
module.exports.addSuperAdminUser = fs.readFileSync(path.join(__dirname, 'addSuperAdminUser.gql'), 'utf8');
module.exports.removeSuperAdminUser = fs.readFileSync(path.join(__dirname, 'removeSuperAdminUser.gql'), 'utf8');
module.exports.recordRequest = fs.readFileSync(path.join(__dirname, 'recordRequest.gql'), 'utf8');
module.exports.bindOtherOAuth = fs.readFileSync(path.join(__dirname, 'bindOtherOAuth.gql'), 'utf8');
module.exports.unbindOtherOAuth = fs.readFileSync(path.join(__dirname, 'unbindOtherOAuth.gql'), 'utf8');
module.exports.unbindEmail = fs.readFileSync(path.join(__dirname, 'unbindEmail.gql'), 'utf8');
module.exports.oauthPasswordLogin = fs.readFileSync(path.join(__dirname, 'oauthPasswordLogin.gql'), 'utf8');
module.exports.createRole = fs.readFileSync(path.join(__dirname, 'createRole.gql'), 'utf8');
module.exports.updateRole = fs.readFileSync(path.join(__dirname, 'updateRole.gql'), 'utf8');
module.exports.updatePermissions = fs.readFileSync(path.join(__dirname, 'updatePermissions.gql'), 'utf8');
module.exports.assignUserToRole = fs.readFileSync(path.join(__dirname, 'assignUserToRole.gql'), 'utf8');
module.exports.removeUserFromGroup = fs.readFileSync(path.join(__dirname, 'removeUserFromGroup.gql'), 'utf8');
module.exports.addClientWebhook = fs.readFileSync(path.join(__dirname, 'addClientWebhook.gql'), 'utf8');
module.exports.updateClientWebhook = fs.readFileSync(path.join(__dirname, 'updateClientWebhook.gql'), 'utf8');
module.exports.deleteClientWebhook = fs.readFileSync(path.join(__dirname, 'deleteClientWebhook.gql'), 'utf8');
module.exports.SendWebhookTest = fs.readFileSync(path.join(__dirname, 'SendWebhookTest.gql'), 'utf8');
module.exports.refreshToken = fs.readFileSync(path.join(__dirname, 'refreshToken.gql'), 'utf8');
module.exports.addCollaborator = fs.readFileSync(path.join(__dirname, 'addCollaborator.gql'), 'utf8');
module.exports.removeCollaborator = fs.readFileSync(path.join(__dirname, 'removeCollaborator.gql'), 'utf8');
module.exports.updateCollaborator = fs.readFileSync(path.join(__dirname, 'updateCollaborator.gql'), 'utf8');
module.exports.addPermission = fs.readFileSync(path.join(__dirname, 'addPermission.gql'), 'utf8');
module.exports.updatePasswordStrengthSettingsByUserPoolId = fs.readFileSync(path.join(__dirname, 'updatePasswordStrengthSettingsByUserPoolId.gql'), 'utf8');
module.exports.resetUserPoolFromWechat = fs.readFileSync(path.join(__dirname, 'resetUserPoolFromWechat.gql'), 'utf8');
module.exports.encryptPassword = fs.readFileSync(path.join(__dirname, 'encryptPassword.gql'), 'utf8');
module.exports.enablePasswordFaas = fs.readFileSync(path.join(__dirname, 'enablePasswordFaas.gql'), 'utf8');
module.exports.addToInvitation = fs.readFileSync(path.join(__dirname, 'addToInvitation.gql'), 'utf8');
module.exports.removeFromInvitation = fs.readFileSync(path.join(__dirname, 'removeFromInvitation.gql'), 'utf8');
module.exports.setInvitationState = fs.readFileSync(path.join(__dirname, 'setInvitationState.gql'), 'utf8');
module.exports.changeMFA = fs.readFileSync(path.join(__dirname, 'changeMFA.gql'), 'utf8');
module.exports.createCustomMFA = fs.readFileSync(path.join(__dirname, 'createCustomMFA.gql'), 'utf8');
module.exports.removeCustomMFA = fs.readFileSync(path.join(__dirname, 'removeCustomMFA.gql'), 'utf8');
module.exports.recordAuthAudit = fs.readFileSync(path.join(__dirname, 'recordAuthAudit.gql'), 'utf8');
module.exports.refreshThirdPartyToken = fs.readFileSync(path.join(__dirname, 'refreshThirdPartyToken.gql'), 'utf8');
module.exports.signIn = fs.readFileSync(path.join(__dirname, 'signIn.gql'), 'utf8');
module.exports.refreshSignInToken = fs.readFileSync(path.join(__dirname, 'refreshSignInToken.gql'), 'utf8');
module.exports.createAdConnector = fs.readFileSync(path.join(__dirname, 'createAdConnector.gql'), 'utf8');
module.exports.updateAdConnector = fs.readFileSync(path.join(__dirname, 'updateAdConnector.gql'), 'utf8');
module.exports.refreshAdConnectorSecret = fs.readFileSync(path.join(__dirname, 'refreshAdConnectorSecret.gql'), 'utf8');
module.exports.removeAdConnector = fs.readFileSync(path.join(__dirname, 'removeAdConnector.gql'), 'utf8');
module.exports.enableAdConnector = fs.readFileSync(path.join(__dirname, 'enableAdConnector.gql'), 'utf8');
module.exports.disableAdConnector = fs.readFileSync(path.join(__dirname, 'disableAdConnector.gql'), 'utf8');
module.exports.enableAdConnectorForProvider = fs.readFileSync(path.join(__dirname, 'enableAdConnectorForProvider.gql'), 'utf8');
module.exports.disableAdConnectorForProvider = fs.readFileSync(path.join(__dirname, 'disableAdConnectorForProvider.gql'), 'utf8');
module.exports.loginByAd = fs.readFileSync(path.join(__dirname, 'loginByAd.gql'), 'utf8');
module.exports.createRBACPermission = fs.readFileSync(path.join(__dirname, 'createRBACPermission.gql'), 'utf8');
module.exports.updateRBACPermission = fs.readFileSync(path.join(__dirname, 'updateRBACPermission.gql'), 'utf8');
module.exports.deleteRBACPermission = fs.readFileSync(path.join(__dirname, 'deleteRBACPermission.gql'), 'utf8');
module.exports.deleteRBACPermissionBatch = fs.readFileSync(path.join(__dirname, 'deleteRBACPermissionBatch.gql'), 'utf8');
module.exports.createRBACRole = fs.readFileSync(path.join(__dirname, 'createRBACRole.gql'), 'utf8');
module.exports.updateRBACRole = fs.readFileSync(path.join(__dirname, 'updateRBACRole.gql'), 'utf8');
module.exports.deleteRBACRole = fs.readFileSync(path.join(__dirname, 'deleteRBACRole.gql'), 'utf8');
module.exports.deleteRBACRoleBatch = fs.readFileSync(path.join(__dirname, 'deleteRBACRoleBatch.gql'), 'utf8');
module.exports.createRBACGroup = fs.readFileSync(path.join(__dirname, 'createRBACGroup.gql'), 'utf8');
module.exports.updateRBACGroup = fs.readFileSync(path.join(__dirname, 'updateRBACGroup.gql'), 'utf8');
module.exports.deleteRBACGroup = fs.readFileSync(path.join(__dirname, 'deleteRBACGroup.gql'), 'utf8');
module.exports.deleteRBACGroupBatch = fs.readFileSync(path.join(__dirname, 'deleteRBACGroupBatch.gql'), 'utf8');
module.exports.assignRBACRoleToUser = fs.readFileSync(path.join(__dirname, 'assignRBACRoleToUser.gql'), 'utf8');
module.exports.assignRBACRoleToUserBatch = fs.readFileSync(path.join(__dirname, 'assignRBACRoleToUserBatch.gql'), 'utf8');
module.exports.revokeRBACRoleFromUser = fs.readFileSync(path.join(__dirname, 'revokeRBACRoleFromUser.gql'), 'utf8');
module.exports.revokeRBACRoleFromUserBatch = fs.readFileSync(path.join(__dirname, 'revokeRBACRoleFromUserBatch.gql'), 'utf8');
module.exports.addPermissionToRBACRole = fs.readFileSync(path.join(__dirname, 'addPermissionToRBACRole.gql'), 'utf8');
module.exports.addPermissionToRBACRoleBatch = fs.readFileSync(path.join(__dirname, 'addPermissionToRBACRoleBatch.gql'), 'utf8');
module.exports.removePermissionFromRBACRole = fs.readFileSync(path.join(__dirname, 'removePermissionFromRBACRole.gql'), 'utf8');
module.exports.removePermissionFromRBACRoleBatch = fs.readFileSync(path.join(__dirname, 'removePermissionFromRBACRoleBatch.gql'), 'utf8');
module.exports.addRoleToRBACGroup = fs.readFileSync(path.join(__dirname, 'addRoleToRBACGroup.gql'), 'utf8');
module.exports.addRoleToRBACGroupBatch = fs.readFileSync(path.join(__dirname, 'addRoleToRBACGroupBatch.gql'), 'utf8');
module.exports.removeRoleFromRBACGroup = fs.readFileSync(path.join(__dirname, 'removeRoleFromRBACGroup.gql'), 'utf8');
module.exports.removeRoleFromRBACGroupBatch = fs.readFileSync(path.join(__dirname, 'removeRoleFromRBACGroupBatch.gql'), 'utf8');
module.exports.addUserToRBACGroup = fs.readFileSync(path.join(__dirname, 'addUserToRBACGroup.gql'), 'utf8');
module.exports.addUserToRBACGroupBatch = fs.readFileSync(path.join(__dirname, 'addUserToRBACGroupBatch.gql'), 'utf8');
module.exports.removeUserFromRBACGroup = fs.readFileSync(path.join(__dirname, 'removeUserFromRBACGroup.gql'), 'utf8');
module.exports.removeUserFromRBACGroupBatch = fs.readFileSync(path.join(__dirname, 'removeUserFromRBACGroupBatch.gql'), 'utf8');
module.exports.createOrg = fs.readFileSync(path.join(__dirname, 'createOrg.gql'), 'utf8');
module.exports.deleteOrg = fs.readFileSync(path.join(__dirname, 'deleteOrg.gql'), 'utf8');
module.exports.addOrgNode = fs.readFileSync(path.join(__dirname, 'addOrgNode.gql'), 'utf8');
module.exports.removeOrgNode = fs.readFileSync(path.join(__dirname, 'removeOrgNode.gql'), 'utf8');
module.exports.createRule = fs.readFileSync(path.join(__dirname, 'createRule.gql'), 'utf8');
module.exports.updateRule = fs.readFileSync(path.join(__dirname, 'updateRule.gql'), 'utf8');
module.exports.deleteRule = fs.readFileSync(path.join(__dirname, 'deleteRule.gql'), 'utf8');
module.exports.setRuleEnv = fs.readFileSync(path.join(__dirname, 'setRuleEnv.gql'), 'utf8');
module.exports.removeRuleEnv = fs.readFileSync(path.join(__dirname, 'removeRuleEnv.gql'), 'utf8');
module.exports.updateRuleOrder = fs.readFileSync(path.join(__dirname, 'updateRuleOrder.gql'), 'utf8');
module.exports.updatePhone = fs.readFileSync(path.join(__dirname, 'updatePhone.gql'), 'utf8');
module.exports.updateEmail = fs.readFileSync(path.join(__dirname, 'updateEmail.gql'), 'utf8');
module.exports.sendChangeEmailVerifyCode = fs.readFileSync(path.join(__dirname, 'sendChangeEmailVerifyCode.gql'), 'utf8');
module.exports.setUserMetadata = fs.readFileSync(path.join(__dirname, 'setUserMetadata.gql'), 'utf8');
module.exports.removeUserMetadata = fs.readFileSync(path.join(__dirname, 'removeUserMetadata.gql'), 'utf8');
