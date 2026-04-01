module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "header-match-atary-pattern": ({ header }: { header: string }) => {
          const valid = /^atary-\d+: .+$/.test(header);
          return [valid, "Commit must be in format: atary-<number>: message"];
        },
      },
    },
  ],
  rules: {
    "header-max-length": [2, "always", 72],
    "type-enum": [2, "always", ["atary"]],
    "header-match-atary-pattern": [2, "always"],
    "subject-empty": [0],
    "type-empty": [0],
  },
};
