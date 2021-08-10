const router = require("express").Router();
const ProductoController = require("../controllers/producto");

router.get("/listarProductos", ProductoController.listarProductos);
router.post("/registrarProductos", ProductoController.registrarProducto);

module.exports = router;