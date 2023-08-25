const Auth = require('./authModel.js');
const SearchList = require('./search_listModel.js');
const Favorites = require('./favoritesModel.js');

Auth.hasOne(SearchList, { foreignKey: "authuser_id"});
SearchList.belongsTo(Auth, { foreignKey: "id"});

Auth.hasMany(Favorites, { foreignKey: "authuser_id"});
Favorites.belongsTo(Auth, { foreignKey: 'id' });


// (async () => {

    
//     await Auth.sync({force: true}).then(() => {
//         // Auth.create({
//         //     "login": "ibadt",
//         //     "password": "12345678"
//         //   });
//         console.log('Table was created...');
//     })

//     await SearchList.sync({ force: true }).then(() => {
//         console.log('SearchList was created...');
//     })

//     await Favorites.sync({ force: true }).then(() => {
//         console.log('Favorites done...');
//     });

// })();



module.exports = { 
    Auth, 
    SearchList,
    Favorites
};