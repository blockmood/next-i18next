module.exports = {
  apps: [
    {
      name: 'dsers-dev-deploy',
      script: 'yarn',
      args: 'dev',
      instances: 1,
      autorestart: true,
      ignore_watch: ["node_modules", "logs", ".next"],
      watch: true,
      restart_delay: 4000,
      max_restarts: 10,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      error_file: "./logs/app-dev-err.log",
      out_file: "./logs/app-dev-out.log"
    },
    {
      name: 'dsers-prod-deploy',
      script: 'yarn',
      args: 'start',
      instances: 1,
      autorestart: true,
      ignore_watch: ["node_modules", "logs", ".next"],
      watch: true,
      restart_delay: 4000,
      max_restarts: 10,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      error_file: "./logs/app-deploy-err.log",
      out_file: "./logs/app-deploy-out.log"
    }
  ]
};