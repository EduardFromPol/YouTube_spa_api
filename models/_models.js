const Auth = require('./authModel.js');
const SearchList = require('./search_listModel.js');
const Favorites = require('./favoritesModel.js');

Auth.hasMany(SearchList, { foreignKey: "authuser_id"});
SearchList.belongsTo(Auth, { foreignKey: "authuser_id" });

Auth.hasMany(Favorites, { foreignKey: "authuser_id"});
Favorites.belongsTo(Auth, { foreignKey: "authuser_id" });


// (async () => {
    
//     await Auth.sync({force: true}).then(() => {
//         Auth.create({
//             "login": "test12",
//             "password": "testtest"
//         })
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