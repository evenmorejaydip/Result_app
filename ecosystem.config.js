module.exports = {
  apps: [
    {
      name: "your-nextjs-app",
      script: "npm", // Path to the Next.js binary
      args: "start", // Arguments to pass to the Next.js binary (in this case, "start" to start the Next.js server)
      instances: "1", // Use as many instances as the number of CPU cores
      autorestart: true, // Automatically restart the application if it crashes
      watch: false, // Set to false for Next.js applications as they handle file changes internally
      max_memory_restart: "1G", // Restart the app if it exceeds 1GB memory usage
      env: {
        NODE_ENV: "production", // Set your desired environment variables here
      },
    },
  ],
};
