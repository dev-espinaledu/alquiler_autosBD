const express = require('express');
const router = express.Router();
const alquileresC = require('../controllers/alquilerController')

router.post('/alquileres', alquileresC.crearAlquiler);
router.get('/alquileres', alquileresC.verAlquileres);
router.put('/alquileres/:id', alquileresC.actualizarAlquiler);
router.delete('/alquileres/:id', alquileresC.eliminarAlquiler);

module.exports = router;