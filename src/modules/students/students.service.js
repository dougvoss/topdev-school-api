const db = require("../../config/database");

async function select() {
  const conn = await db.getConnection();
  const sql = "SELECT * FROM student";
  const [result] = await conn.query(sql);
  return result;
}

async function insert(student) {
  const conn = await db.getConnection();
  const sql = "INSERT INTO student(name, age, sex) VALUES (?, ?, ?)";
  const values = [student.name, student.age, student.sex];
  const [result] = await conn.query(sql, values);
  return result;
}

async function update(id, student) {
  const conn = await db.getConnection();
  const sql = "UPDATE student SET name=?, age=?, sex=? WHERE id=?";
  const values = [student.name, student.age, student.sex, id];
  const [result] = await conn.query(sql, values);
  return result;
}

async function remove(id) {
  const conn = await db.getConnection();
  const sql = "DELETE FROM student WHERE id=?";
  const [result] = await conn.query(sql, [id]);
  return result;
}

module.exports = { select, insert, update, remove };
