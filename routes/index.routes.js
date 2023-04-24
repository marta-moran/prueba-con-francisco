const router = require("express").Router();

const { createUser } = require("../controller/User.controller");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/get-all", (req, res, next) => {
  res.status(200).json({ message: "listando" })
})


router.put("/edit", (req, res, next) => {
  res.status(200).json({ message: "editando" })
})


router.delete("/delete", (req, res, next) => {
  res.status(200).json({ message: "borrando" })
})


router.post("/create", createUser)




module.exports = router;
