const customController = require("./server/controllers/auth");
const customUserController = require("./server/controllers/user");
const customService = require("./server/services/user");
const customProviders = require("./server/services/providers");

module.exports = (plugin) => {
  plugin.controllers.auth = customController;
  plugin.controllers.user = customUserController;
  plugin.services.user = customService;

  plugin.services.providers = customProviders;

  plugin.routes["content-api"].routes.push({
    method: "PATCH",
    path: "/user/update/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
    },
  });

  return plugin;
};

// plugin.controllers.auth.signup = async (ctx) => {
//   console.log("hiii");
//   try {
//     const user = await strapi.query("plugin::users-permissions.user").create({
//       data: {
//         mobile: "09011231122",
//       },
//     });

//     return ctx.send({
//       user,
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   ctx.body = { test: "aaaaa" };
// };

// plugin.policies[newPolicy] = (ctx) => {};
