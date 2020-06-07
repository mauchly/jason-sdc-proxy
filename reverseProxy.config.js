module.exports = {
  apps: [{
    name: "sdc_proxy-api",
    script: "./server/index.js",
    watch: true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
    "NODE_ENV": "production"
    }
  }]
};