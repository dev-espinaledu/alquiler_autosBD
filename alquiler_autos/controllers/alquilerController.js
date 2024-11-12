const {Alquiler} = require('../models/alquilerModel')

const crearAlquiler = async (req, res) => {
    try {
        const {cliente, auto, fechaInicio, fechaFin} = req.body;
        const alquiler = new Alquiler({cliente, auto, fechaInicio, fechaFin})
        await alquiler.save()
        res.json({message: 'Alquiler creado con éxito'});
    } catch (e) {
        res.json({message: "Error"})
    }
}
const verAlquileres = async (req, res) => {
    try {
        const alquileres = await Alquiler.findAll();
        res.json(alquileres)
    } catch (e) {
        res.json({message: "Error"})
    }
}
const actualizarAlquiler = async (req, res) => {
    try {
        const alquiler = await Alquiler.update(
            { cliente, auto, fechaInicio, fechaFin },
            { where: { id } });
    } catch (e) {
        res.json({message: "Error"})
    }
}
const eliminarAlquiler = async (req, res) => {
    try {
        const {id} = req.params;
        await Alquiler.destroy({ where: { id } });
        res.json({message: 'Alquiler eliminado con éxito'});
    } catch (e) {
        res.json({message: "Error"})
    }
}
module.exports = {crearAlquiler, verAlquileres, actualizarAlquiler, eliminarAlquiler}