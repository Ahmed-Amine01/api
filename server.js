var express = require("express");

var PORT = 2000;
var cors = require("cors");

var connection;

var DataCuisine = [{
    question : "En moyenne, quel est le fromage le plus vendu en France ?", r1 : "La raclette", r2 : "Le mozarella", r3 : "Le roquefort", r4 : "le chèvre",correctAnswer:"La raclette"},{
    question : "Quel est le plat le plus consommé dans le monde ?", r1 : "La Pizza", r2 : "Le Burger", r3 : "Les pâtes", r4 : "Le riz",correctAnswer:"La Pizza"},{
    question : "Où a été inventé le Hamburger ?", r1 : "Amérique", r2 : "Allemagne", r3 : "Italie", r4 : "Arabie Saoudite",correctAnswer:"Allemagne"}

]

var DataFemme= [{
    question : "Femme", r1 : "10", r2 : "12", r3 : "15", r4 : "20",correctAnswer:"20"},{
    question : "Femme2", r1 : "10", r2 : "12", r3 : "15", r4 : "21",correctAnswer:"21"}
];  
const app = express();



app.use(cors({ origin: "*" }));
app.use(express.urlencoded());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`le serveur est lancé sur le port: ${PORT}`);
});

// cuisine data
app.get("/cuisine", function (req, res) {
  try {
    console.log(req)
   
      res.status(200).send( JSON.stringify(DataCuisine));
  
  } catch (error) {
    console.log(error);
    res.status(201);
  }
});

// femme Data

app.get("/femme", function (req, res) {
    try {
      console.log(req)
     
        res.send( JSON.stringify(DataFemme));
    
    } catch (error) {
      console.log(error);
    }
  });