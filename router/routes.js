const express = require("express");

const router = express.Router();
const Taskdata = require("../models/task");
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const task = await Taskdata.create(req.body);
    res.status(201).json({
      task,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: req.body,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const task = await Taskdata.find();
    res.status(200).json({
      tasks: task,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const task = await Taskdata.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({
        error: "There is no task at that id",
      });
    }
    res.status(200).json({
      tasks: task,
    });
  } catch (error) {
    res.status(404).json({
      error: "There is no task at that id",
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const task = await Taskdata.findByIdAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({
        error: "There is no task at that id",
      });
    }
    res.status(204).json({
      respose: "deleted",
      tasks: task,
    });
  } catch (error) {
    res.status(404).json({
      error: "There is no task at that id",
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const task = await Taskdata.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json({
      task,
    });
  } catch (error) {
    res.status(404).json({
      error: "There is no task at that id",
    });
  }
});
router.delete("/", async (req, res) => {
  try {
    const task = await Taskdata.deleteMany();
    res.status(204).json({
      tasks: task,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

module.exports = router;
