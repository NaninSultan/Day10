var myPet = {
    species: "pujdo",
    name: "pujdan",
    legs: 4,
    friends: ["pajdo", "pojdo"]
};
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };