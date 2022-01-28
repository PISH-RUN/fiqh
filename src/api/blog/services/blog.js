"use strict";

/**
 * blog service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::blog.blog", ({ strapi }) => ({
  async findOne(entityId, params, ip) {
    const result = await super.findOne(entityId, params);

    const checkPreviousVisit = await strapi
      .query("api::blog-visit.blog-visit")
      .findOne({
        where: { ip, blog: entityId },
      });

    if (!checkPreviousVisit) {
      await strapi.query("api::blog-visit.blog-visit").create({
        data: { ip, blog: entityId },
      });

      await strapi.entityService.update("api::blog.blog", entityId, {
        data: {
          visitCount: result.visitCount + 1,
        },
      });
    }

    return result;
  },
}));
