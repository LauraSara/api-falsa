const express = require("express");
const faker = require('faker');

const app = express();
const port = 8000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


faker.locale = "es";

//GET

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   }  
];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//localhost:8000

app.get("/api/usuario/falso", (req,res) =>{
    var usuario = {

        carnet: faker.random.number(12345678)+ "-" + faker.random.number(9),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        celular: faker.phone.phoneNumber(),
        email: faker.internet.email(), 
        contraseña: faker.internet.password(),
    }
  res.json( usuario );
});


app.get("/api/empresa/falsa", (req,res) =>{

var empresa = {
    carnet: faker.random.number(87654321)+ "-" + faker.random.number(0),
    nombre: faker.company.companyName(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.state(),
    codigoPostal: faker.address.zipCode(),
    country: faker.address.country(),
}
res.json(empresa);
});

app.get("/api/falsos", (req,res) =>{
  var usuario = {

      carnet: faker.random.number(12345678)+ "-" + faker.random.number(9),
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      celular: faker.phone.phoneNumber(),
      email: faker.internet.email(), 
      contraseña: faker.internet.password(),
  }

  var empresa = {
    carnet: faker.random.number(87654321)+ "-" + faker.random.number(0),
    nombre: faker.company.companyName(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.state(),
    codigoPostal: faker.address.zipCode(),
    country: faker.address.country(),
  }

  var juntos = {
    usuario: usuario,
    empresa: empresa
  }

res.json( juntos );
});


// POST




app.post("/api/usuario/falso", (req, res) => {

  console.log(req.body);
  users.push(req.body);
  res.json( { status: "ok" } );
});

//
app.listen( port, () => console.log(`Listening on port: ${port}`) );