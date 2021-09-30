//*******rutas********* */

const express = require('express');
const router = express.Router();
const multer=require("multer");
const path = require("path");
// en donde lo guardo ?

const controller=require("../controllers/groupsController")

// multer lo uso para prosesar la informacion por eso solo va en rutas 
let storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        
    callback(null, path.join(__dirname,"../public/img/groups")) },

    filename:(req,file,callback)=>{
     console.log(file);        //originalname=Nombre del archivo en la computadora del usuario .jpg
     const newFilename = "group-"+ Date.now() + path.extname(file.originalname);
     callback(null,newFilename)  //path	=La ruta completa al archivo cargado
                       //Implementación de path.extname adaptada para incluir también múltiples extensiones de puntos.
    }})
// guardar archivos{storage:estorage=multer.diskStorage}
let upload=multer({storage:storage})// salida






// Todos los grupos
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', upload.single("group-image"),controller.store);
// archivo.single(type="file" y name="group-image")
//Acepte un solo archivo con el nombre fieldname. 
//El archivo único se almacenará en formato req.file.

// Detalle de un grupo
router.get('/:id', controller.show);

module.exports = router;