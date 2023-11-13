const { Sequelize, DataTypes } = require('sequelize');


// NOTER:
// Sequelize er en ORM (Object Relational mapper), den bruger JS Objekter til at lave relationer mellem "relationelle databaser".
// "Constructor" objekter i JS skrives med stort forbogstav, og er farvet grøn/tyrkis i VSCode, i kan måske genkende det når i har arbejdet med dato'er i JS, eks. "new Date()".

// Først laver vi "constructor"-objektet, med informationer om den database vi forsøger at forbinde til:
const sequelize = new Sequelize('webdock_db', 'root', 'zob4hSbUGSAM', {
    host: 'davidsserver.vps.webdock.cloud',
    dialect: 'mysql',

  });

// Derefter tester vi om der er forbindelse med sequelizes function "authenticate":
sequelize.authenticate().then(()=>{
    console.log("forbindelse oprettet!");
}).catch((err)=>{
    console.log("forbindelse ikke oprettet!");
});

// Så laver vi et "User" objekt som er den tabel og data der skal laves i databasen:

const User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Define userId as the primary key
      autoIncrement: true, 
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(255), 
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    jobTitle: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });

  // Tabellen oprettes ved at bruge ".sync()"-metoden på vores "User"-objekt:
  // Note: Sequelize console.logger også den SQL-forespørgsel den genererer, inden den returnerer status (succes eller fejl).

  User.sync().then(()=>{
    console.log("Tabel og model oprettet");
  }).catch((err)=>{
    console.log("ikke oprettet", err);
  });


// var express = require("express");
// 
// var app = express();
// 
// app.get('/', (req, res) => {
//     res.json("this is backend")
// });




//server kører på port 
// app.listen(3301, ()=>{
//     console.log("backend kører på http://localhost:3301/")
// });