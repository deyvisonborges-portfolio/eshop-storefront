const path = require("path");

/** @type {import('next').NextConfig} */
exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
