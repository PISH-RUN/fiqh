"use strict";

/**
 *  blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;
    const ip = ctx.ip || "test-ip-1010";

    const entity = await strapi
      .service("api::blog.blog")
      .findOne(id, query, ip);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
