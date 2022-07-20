const express = require("express");
const app= express();
const PORT= 8080;
const productos= [
    {producto1:"camiseta",precio:345,id:1},
    {producto1:"Remera",precio:752,id:2},
    {producto1:"Pantalon",precio:143,id:3},
    {producto1:"Botines",precio:145,id:4},
    {producto1:"Zapatillas",precio:147,id:5},
    {producto1:"Gorra",precio:175,id:6},
]
const min=1
const max=6

const numero = Math.floor(Math.random()*(max-min+1)+min);

app.get("/", (req,res)=>{
    res.send({mensaje:"Hola mundo"})
})
app.get("/productos", (req,res)=>{
    res.send(productos)
})


app.get("/productoRandom", (req,res)=>{

    res.send(productos[numero])

})



const connectedServer= app.listen(PORT, ()=>{
    console.log(`servido Http escuachando en el puertdo ${PORT}`)
})