"use strict";

/**
 * blog-comment-vote service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

const utils = require("@strapi/utils");

const { NotFoundError } = utils.errors;

module.exports = createCoreService(
  "api::blog-comment-vote.blog-comment-vote",
  ({ strapi }) => ({
    async create(params) {
      const blogComment = await strapi.entityService.findOne(
        "api::blog-comment.blog-comment",
        params.data.blog_comment
      );

      if (!blogComment) {
        throw new NotFoundError("Blog comment not found");
      }

      const blogCommentVote = await strapi
        .query("api::blog-comment-vote.blog-comment-vote")
        .findOne({
          where: {
            user: params.data.user,
            blog_comment: params.data.blog_comment,
          },
        });

      let result;

      if (blogCommentVote && blogCommentVote.vote == params.data.vote) {
        return blogCommentVote;
      }

      if (!blogCommentVote) {
        result = await strapi
          .query("api::blog-comment-vote.blog-comment-vote")
          .create(params);

        await strapi.entityService.update(
          "api::blog-comment.blog-comment",
          params.data.blog_comment,
          {
            data: {
              voteCount: params.data.vote
                ? blogComment.voteCount + 1
                : blogComment.voteCount - 1,
            },
          }
        );
      } else {
        result = await strapi
          .query("api::blog-comment-vote.blog-comment-vote")
          .update({
            where: {
              user: params.data.user,
              blog_comment: params.data.blog_comment,
            },
            data: { vote: params.data.vote },
          });

        await strapi.entityService.update(
          "api::blog-comment.blog-comment",
          params.data.blog_comment,
          {
            data: {
              voteCount: params.data.vote
                ? blogComment.voteCount + 2
                : blogComment.voteCount - 2,
            },
          }
        );
      }

      return result;
    },

    async delete(params) {
      const result = await strapi
        .query("api::blog-comment-vote.blog-comment-vote")
        .delete({
          where: { user: params.user, blog_comment: params.blog_comment },
        });

      if (result) {
        const blogComment = await strapi.entityService.findOne(
          "api::blog-comment.blog-comment",
          params.blog_comment
        );

        await strapi.entityService.update(
          "api::blog-comment.blog-comment",
          params.blog_comment,
          {
            data: {
              voteCount: result.vote
                ? blogComment.voteCount - 1
                : blogComment.voteCount + 1,
            },
          }
        );
      }

      return result;
    },
  })
);
