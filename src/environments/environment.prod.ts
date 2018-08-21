export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname){
  case 'efajobboardfront.herokuapp.com':
    APIURL = 'https://efajobboardfront.herokuapp.com'
    break;
  default:
    APIURL = 'http://localhost:4200'
}
