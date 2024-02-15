import EmberRouter from '@ember/routing/router';
import config from 'pwa-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('page1', { path: '/' });
  this.route('page2', { path: '/page2' });
});
