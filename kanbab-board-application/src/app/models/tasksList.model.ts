export class TasksList {
    constructor(public name: string, public tasks: string[]) {}
}

export interface ITasks {
    name: string;
    tasks: string[];
}