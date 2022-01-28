"use strict";

const { yup, validateYupSchema } = require("@strapi/utils");

const blogRateBodySchema = yup.object().shape({
  blog: yup.number().required(),
  score: yup.number().min(1).max(5).required(),
});

module.exports = {
  validateBlogRateBody: validateYupSchema(blogRateBodySchema),
};
