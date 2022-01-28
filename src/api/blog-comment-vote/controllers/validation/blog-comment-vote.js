"use strict";

const { yup, validateYupSchema } = require("@strapi/utils");

const commentVoteBodySchema = yup.object().shape({
  blog_comment: yup.number().required(),
  vote: yup.boolean().required(),
});

module.exports = {
  validateCommentVoteBody: validateYupSchema(commentVoteBodySchema),
};
