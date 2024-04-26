module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "run build",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
