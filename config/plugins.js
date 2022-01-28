module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        apiVersion: env("AWS_API_VERSION") || "2006-03-01",
        accessKeyId:
          env("AWS_ACCESS_KEY_ID") || "3eea1f97-f796-41f5-a6f5-2e23d0507870",
        secretAccessKey:
          env("AWS_ACCESS_SECRET") ||
          "68e7b36cd9d4d8bc39097ad53f3ad7f4846bc19306c4df38ea4d018bc913e4a4",
        endpoint: env("ENDPOINT") || "https://s3.ir-thr-at1.arvanstorage.com",
        params: {
          Bucket: env("AWS_BUCKET") || "fms",
        },
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 465),
        secure: true,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "salar.amirahmadiii@gmail.com",
        defaultReplyTo: "salar.amirahmadiii@gmail.com",
      },
    },
  },
  "ghasedak-sms": {
    enabled: true,
    resolve: "./src/plugins/ghasedak-sms",
  },
});
