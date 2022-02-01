const customConfig = require("./server/config");
const customService = require("./server/services");

module.exports = (plugin) => {
  plugin.config = customConfig.default;
  plugin.services = customService;

  return plugin;
};
