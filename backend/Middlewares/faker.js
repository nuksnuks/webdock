// henter pakker der bruges
const { Sequelize, DataTypes } = require('sequelize');
const { faker } = require('@faker-js/faker');

// henter modeller
const User = require('../models');;

// opretter forbindelse
const sequelize = new Sequelize('webdock_db', 'root', 'zob4hSbUGSAM', {
    host: 'davidsserver.vps.webdock.cloud',
    dialect: 'mysql'
});

// tester forbindelse
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Forbindelse oprettet');
    } catch (error) {
        console.error('fejl i forbindelse', error);
    }

  // nu laves der data ved hjælp af faker

  // note: ønskes flere data kan følgende kodeblock wrappes i et for-loop
    //for(i=0; i<10; i++){
        try {

            //laver data i Users-tabellen

            await User.create({
                role: 'user',
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                
            });


        } catch (error) {
            console.error('kunne ikke oprette dummydata', error);
        };
    //}
})();