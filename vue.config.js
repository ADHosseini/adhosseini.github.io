module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "/web/" : "/web/",
  outputDir: "web",
  productionSourceMap: false,
};
