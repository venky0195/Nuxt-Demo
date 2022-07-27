export default {
  serverMiddleware: { "/fun": "~/server-middleware/logger", "/api": "~/api" },
  modules: ["@nuxt/http"],
  http: {
    // proxyHeaders: false
  },
};
