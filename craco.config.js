const path = require("path");

module.exports = {
  devServer: {
    port: 8080,
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@shared-ui-components": path.resolve(
        __dirname,
        "src/components/shared-ui-components"
      ),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@shared-layouts": path.resolve(
        __dirname,
        "src/components/shared-layouts"
      ),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared-containers": path.resolve(
        __dirname,
        "src/components/shared-containers"
      ),
    },
  },
};