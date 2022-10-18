const path = require("path");

module.exports = function override(config, env) {
  const babelRule = config.module.rules[1].oneOf.find(
    (rules) => rules.include === path.resolve(__dirname, "./src")
  );
  babelRule.include = [
    babelRule.include,
    path.resolve(__dirname, "../typescript/src")
  ];
  return config;
};
