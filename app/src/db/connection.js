import mysql from 'mysql2/promise'

// .env
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

export default mysql.createPool({
  ...config,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});
