const Almacen = require("../models/almacen");

const registrarAlmacen = async (req, res) => {
    if(!req.body.name || !req.body.direccion || !req.body.ciudad)
        return res.status(401).send("Failed: Empty Data Sent");
    
    const almacenExistente = await Almacen.findOne({ name: req.body.name });
    if(almacenExistente) return res.status(401).send("Failed: Almacen already exist");

    const almacen = new Almacen({
        name: req.body.name,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
    });
    const resultado = await almacen.save();
    if(!resultado) return res.status(400).send("Failed: Error on DataBase");
    return res.status(201).send({ almacen });
};

const listarAlmacenes = async (req, res) => {
    const almacen = await Almacen.find();
    if(!almacen) return res.status(400).send("Failed: Error on DataBase");
    return res.status(201).send({ almacen })
};

module.exports = { registrarAlmacen, listarAlmacenes };