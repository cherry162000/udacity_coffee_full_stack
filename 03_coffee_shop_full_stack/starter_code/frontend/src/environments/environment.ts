/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000/', // the running FLASK api server url
  auth0: {
    url: 'udacity-project-fswd.us', // the auth0 domain prefix
    audience: 'http://localhost:8080', // the audience set for the auth0 app
    clientId: 'c6swVQ0uuIEvPF29ZU40lj8uBgGm5lXs', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8080', // the base url of the running ionic application. 
  }
};

