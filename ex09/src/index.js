function myFunction(myObj, checkProp) {
    var jelBitno = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };
    jelBitno.hasOwnProperty(checkProp);
    myObj = jelBitno[checkProp];

    if (jelBitno.hasOwnProperty(checkProp) === true) {
        return myObj;
    } else {
        return "Not Found";
    }

}
module.exports = myFunction;