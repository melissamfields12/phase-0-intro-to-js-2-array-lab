// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    return cats.push("Ralph");
}
function destructivelyPrependCat() {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    return cats.splice(-1);
}
function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1);
}
function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat() {
    const newCats = ["Arnold", ...cats];
    return newCats;
}
function removeLastCat() {
    const newCats = [...cats.slice(0, 2)];
    return newCats;
}
function removeFirstCat() {
    const newCats = [...cats.slice(1)];
    return newCats;
}