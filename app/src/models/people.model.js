import dbConnection from '../db/connection.js';

export const listPeople = async () => {
  try {
    const querySQL = `select * from people`;
    const [results, _] = await dbConnection.query(querySQL);
    return results;
  } catch (exception) {
    throw exception;
  }
}

export const insertPeople = async (name) => {
  try {
    const querySQL = `INSERT INTO people (name)
                      SELECT * FROM (SELECT ?) AS tmp WHERE NOT EXISTS (SELECT 1 FROM people WHERE name = ?) LIMIT 1`;
    const [results, _] = await dbConnection.query(querySQL, [name, name]);
    return results;
  } catch (exception) {
    throw exception;
  }
}