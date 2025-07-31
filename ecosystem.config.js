module.exports = {
  apps: [
    {
      name: "chemical",
      cwd: "/var/www/chemical",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
      },
    },
  ],
};
