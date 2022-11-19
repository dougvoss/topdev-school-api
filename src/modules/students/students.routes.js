const service = require("./students.service");
const { Router } = require("express");

const studentRouter = Router();

studentRouter.get("/", async (req, res) => {
  try {
    const result = await service.select();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error on select students.");
  }
});

studentRouter.post("/", async (req, res) => {
  try {
    const student = req.body;
    const result = await service.insert(student);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error on create student.");
  }
});

studentRouter.put("/:id", async (req, res) => {
  try {
    const student = req.body;
    const id = req.params.id;
    const result = await service.update(id, student);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error on update student.");
  }
});

studentRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await service.remove(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error on delete student.");
  }
});

module.exports = { studentRouter };
