export default {
  serverMiddleware: { "/": "~/server-middleware/logger", "/api": "~/api" },
  modules: ["@nuxt/http"],
  http: {
    // proxyHeaders: false
  },
};
