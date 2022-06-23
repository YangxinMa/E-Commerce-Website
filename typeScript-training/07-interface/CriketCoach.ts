import { Coach } from "./Coach";

export class CriketCoach implements Coach{
    getDailyWorkout(): string {
        return `Practice your spin bowling technique.`;
    }
}