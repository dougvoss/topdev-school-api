async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;
  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  global.connection = connection;
  return connection;
}

exports.getConnection = () => connect();
