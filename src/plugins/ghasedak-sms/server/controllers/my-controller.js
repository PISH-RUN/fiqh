'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('ghasedak-sms')
      .service('myService')
      .getWelcomeMessage();
  },
};
