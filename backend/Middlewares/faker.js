// henter pakker der bruges
const { Sequelize, DataTypes } = require('sequelize');
const { faker } = require('@faker-js/faker');

// henter modeller
const User = require('../Models/UserModel');
const Role = require('../Models/RoleModel');

// definerer FK i Users-tabellen
User.belongsTo(Role);

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

            //laver data i Roles-tabellen
            await sequelize.sync({ force: true });
            const role = await Role.create({
                roleType: 'User'
            });

            //laver data i Users-tabellen

            await User.create({
                firstName: "Nicole",
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                jobTitle: faker.person.jobTitle(),
                roleId: role.roleId // use the roleId of the newly created role
            });


        } catch (error) {
            console.error('kunne ikke oprette dummydata', error);
        };
    //}
})();