"use strict";

const { yup, validateYupSchema } = require("@strapi/utils");

const blogBookmarkBodySchema = yup.object().shape({
  blog: yup.number().required(),
});

module.exports = {
  validateBlogBookmarkBody: validateYupSchema(blogBookmarkBodySchema),
};
