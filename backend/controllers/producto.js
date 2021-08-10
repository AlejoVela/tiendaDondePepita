const Producto = require("../models/producto");

const registrarProducto = async (req, res) => {
    if(!req.body.name || !req.body.precio || !req.body.codigo || !req.body.descripcion)
        return res.status(401).send("Failed: Empty Data sent");
    
    const productoExistente = await Producto.findOne({codigo: req.body.codigo});
    if(productoExistente) return res.status(401).send("Failed: Product Already exist");

    const producto = new Producto({
        name: req.body.name,
        precio: req.body.precio,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
    });

    const resultado = await producto.save();
    if(!resultado) return res.status(400).send("Failed: error on DataBase")

    return res.status(200).send({ producto });
};

const listarProductos = async (req, res) => {
    const producto = await Producto.find();
    if(!producto) return res.status(400).send("Failed: error on DataBase")
    return res.status(200).send({ producto })
};

module.exports = { registrarProducto, listarProductos };