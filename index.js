const cors =require('cors');

const http= require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const {Server} =require('socket.io');
const { isBooleanObject } = require('util/types');
const io = new Server(server);

app.use(express.static('./src'));

app.use(cors({
    origin: '*',
    methods:['GET']
}));



let lenguajes=[
    {
        "id": "1",
        "name": "javascript",
        "anio": 1995,
        "designer": "Brendan Eich",
        "description":"JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase."
    },
    {
        "id": "2",
        "name": "python",
        "anio": 1991,
        "designer": "Guido van Rossum",
        "description":"Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código"
    },
    {
        "id": "3",
        "name": "php",
        "anio": 1995,
        "designer": "Rasmus Lerdorf",
        "description":"PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web."
    },
    {
        "id": "4",
        "name": "typecript",
        "anio": 2012,
        "designer": "Microsoft",
        "description":"TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript."
    },
    {
        "id": "5",
        "name": "java",
        "anio": 1996,
        "designer": "James Gosling",
        "description":"Java es una plataforma informática de lenguaje de programación creada por Sun Microsystems en 1995. Ha evolucionado desde sus humildes comienzos hasta impulsar una gran parte del mundo digital actual, ya que es una plataforma fiable en la que se crean muchos servicios y aplicaciones."
    },
    {
        "id": "6",
        "name": "c#",
        "anio": 2000,
        "designer": "Anders Hejlsberg (Microsoft)",
        "description":"C# es un lenguaje de programación multiparadigma de alto nivel y propósito general. C# abarca disciplinas de programación de tipado estático, tipado fuerte, de ámbito léxico, imperativo, declarativo, funcional, genérico, orientado a objetos y orientado a componentes."
    },
    {
        "id": "7",
        "name": "c++",
        "anio": 1979,
        "designer": "Bjarne Stroustrup",
        "description":"La intención de su creación fue extender al lenguaje de programación C y añadir mecanismos que permiten la manipulación de objetos. En ese sentido, desde el punto de vista de los lenguajes orientados a objetos, C++ es un lenguaje híbrido."
    },
    {
        "id": "8",
        "name": "rubi",
        "anio": 1995,
        "designer": "Yukihiro Matsumoto",
        "description":"Ruby es un lenguaje de programación interpretado, reflexivo y orientado a objetos"
    }
];


app.get("/", (req,res)=>{
        res.sendFile(__dirname + '/src/html/index.html');
});

app.get("/lenguajes",(req,res)=>{
    res.json({lenguajes})
})


io.on('connection',(socket)=>{
    io.emit('data', lenguajes);
});

server.listen(8080, ()=>{
    console.log("Ejecutandose en el puerto 8080")
})
