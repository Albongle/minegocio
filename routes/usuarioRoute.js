const express = require("express");
const router = express.Router();

router.get("/login", (_req,res)=>{

    res.render("pages/login");
});

router.get("/alta", (_req,res)=>{

    res.render("pages/registrar");
});



module.exports = router;