module.exports = {
    root: true,
    env: {
      node: true
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module"
    },
    extends: ["prettier", "eslint:recommended"],
    plugins: ["prettier"]
};
  