const proxy = require("http-proxy-middleware");
//add proxy to help routing front end to back end server
module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
  app.use(proxy("/auth/twitter", { target: "http://localhost:5000" }));
  app.use(proxy("/auth/linkedin", { target: "http://localhost:5000" }));
  app.use(proxy("/auth/facebook", { target: "http://localhost:5000" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
  app.use(proxy("/users/*", { target: "http://localhost:5000" }));
};
