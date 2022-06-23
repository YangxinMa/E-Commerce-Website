export { };

let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let tempSport of sportOne) {
    if (tempSport == "Cricket") {
        console.log(`${tempSport} << My Favorite!`);
    } else {
        console.log(tempSport);
    }
}