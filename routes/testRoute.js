const express = require ("express");
const router = express.Router();
const {faker} = require("@faker-js/faker");
const productosFaker =[];




router.get("/productos",(_req,res)=>{
    informacionAleatoria();
    res.status(200).render("pages/productos", {productos:productosFaker});

});

router.get("/usuario/login", (_req,res)=>{

    res.render("pages/login");
});

router.get("/usuario/alta", (_req,res)=>{

    res.render("pages/registrar");
});



function informacionAleatoria(){
    productosFaker.splice(0,productosFaker.length);
    for (let index = 0; index < 10; index++) {
        const obj = {
            id:faker.random.alphaNumeric(4),
            urlImg: faker.image.image(),
            desc: faker.lorem.lines(),
            nombre: faker.commerce.productName(),
            marca: faker.commerce.productAdjective(),
            gama: faker.commerce.productMaterial(),
            tipo: faker.commerce.product(),
            stock:  faker.finance.amount(1,20,0),
            precio: faker.finance.amount(10000,78000,2,"$"),
            cuotas: faker.finance.amount(3,12,0)
        };
        
        productosFaker.push(obj);
    }
}



module.exports = router;