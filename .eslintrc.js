module.exports = {
  root: true,
  env: {
    node: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  plugins: ["jest"],
};
