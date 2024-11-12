//  storeManager
//  Objetos utilizando la notación por puntos

var storeManager = {}; //create an object
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.gretting = "Let's make some money";

//  Assistant Manager
//  Objetos pares clave-valor delimitados por comas

var assistantManager = {
  movement: 3,
  socialSkills: 30,
  streetSmarts: 30,
  healt: 40,
};

console.log(storeManager);
console.log(assistantManager);

/*  Una vez construido el objeto puedo actualizarlo
    añadiendo nuevas propiedades.
*/

storeManager.nextAchievement = "open a new store";
assistantManager.nextAchievement = "get promoted";

console.log(storeManager);
console.log(assistantManager);
