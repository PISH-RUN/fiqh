"use strict";

/**
 * blog-rate service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::blog-rate.blog-rate",
  ({ strapi }) => ({
    async create(params) {
      const checkPreviousRate = await strapi
        .query("api::blog-rate.blog-rate")
        .findOne({
          where: { user: params.data.user, blog: params.data.blog },
        });

      let result;

      if (!checkPreviousRate) {
        result = await strapi.query("api::blog-rate.blog-rate").create(params);
      } else {
        result = await strapi.query("api::blog-rate.blog-rate").update({
          where: { user: params.data.user, blog: params.data.blog },
          data: { score: params.data.score },
        });
      }

      const rates = await strapi
        .query("api::blog-rate.blog-rate")
        .findWithCount({
          where: { blog: params.data.blog },
        });

      const sumScores = rates[0].reduce((sum, item) => sum + item.score, 0);

      const averageScore = (sumScores / rates[1]).toFixed(1);

      await strapi.entityService.update("api::blog.blog", params.data.blog, {
        data: {
          totalRate: averageScore,
        },
      });

      return result;
    },
  })
);
