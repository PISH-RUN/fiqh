"use strict";

const { yup, validateYupSchema } = require("@strapi/utils");

const commentBodySchema = yup.object().shape({
  blog: yup.number().required(),
  content: yup.string().required(),
});

module.exports = {
  validateCommentBody: validateYupSchema(commentBodySchema),
};
