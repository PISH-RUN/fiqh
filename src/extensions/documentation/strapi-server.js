const customConfig = require("./server/config");

module.exports = (plugin) => {
  plugin.config = customConfig.default;
  // console.log(plugin);

  return plugin;
};
