const router = require("express").Router();
const AlmancenController = require("../controllers/almacen");

router.get("/listarAlmacenes", AlmancenController.listarAlmacenes);
router.post("/registrarAlmacenes", AlmancenController.registrarAlmacen);

module.exports = router;