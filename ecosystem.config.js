module.exports = {
  apps: [
    {
      name: "Aunor",
      script: "./server.js",
      watch: true,
      env: {
        "API_PORT": 5000,
        "NODE_ENV": "development",
        "DB_HOST": 'localhost',
        "DB_USER": 'root',
        "DB_PASSWORD": 'mysql',
        "DB_NAME": 'aunor_db'
      },
      env_production: {
        "API_PORT": 80,
        "NODE_ENV": "development",
        "DB_HOST": 'localhost',
        "DB_USER": 'root',
        "DB_PASSWORD": 'mysql',
        "DB_NAME": 'aunor_db'
      }
    }
  ]
}