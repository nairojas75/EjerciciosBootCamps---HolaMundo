import { LEVELS } from "./levels.enum";

//la clase
export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL

    // el constructor
    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
        
    }
}