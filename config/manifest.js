'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'pwa-demo',
    short_name: 'pwa-demo',
    description: '',
    start_url: '/pwa-demo/',
    scope: '/pwa-demo/',
    share_target: {
      action: '/share-target/',
      method: 'GET',
      params: {
        title: 'title',
        text: 'text',
        url: 'url',
      },
    },
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'icon.webp',
        sizes: '256x256',
        type: 'image/webp',
      },
    ],
    ms: {
      tileColor: '#fff',
    },
  };
};
