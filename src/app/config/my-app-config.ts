export default {
  oidc: {
    clientId: '0oacvnh6xgDKcRzO25d7', //copied from okta page
    issuer: 'https://dev-20606496.okta.com/oauth2/default', //copied from okta page only add https://  /oauth2/default
    redirectUri: 'https://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
  },
};
