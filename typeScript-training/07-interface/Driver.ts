import { Coach } from "./Coach";
import { CriketCoach } from "./CriketCoach";
import { GolfCoach } from "./GolfCoach";

let myCriketCoach = new CriketCoach();
let myGolfCoash = new GolfCoach();


let theCoaches: Coach[] = [];

theCoaches.push(myCriketCoach);
theCoaches.push(myGolfCoash);

for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}
