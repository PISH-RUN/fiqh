module.exports = ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `https://${env("AWS_BUCKET")}.s3.ir-thr-at1.arvanstorage.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `https://${env("AWS_BUCKET")}.s3.ir-thr-at1.arvanstorage.com`,
          ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
