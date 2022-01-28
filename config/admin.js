module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '661ee08a3f332be6c13cb238011a4c12'),
  },
});
