"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CriketCoach_1 = require("./CriketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCriketCoach = new CriketCoach_1.CriketCoach();
let myGolfCoash = new GolfCoach_1.GolfCoach();
let theCoaches = [];
theCoaches.push(myCriketCoach);
theCoaches.push(myGolfCoash);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
