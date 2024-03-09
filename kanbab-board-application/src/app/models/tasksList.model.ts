import { ITask } from "./task.model";

export class TasksList {
    constructor(public name: string, public tasks: ITask[]) {}
}

export interface ITasks {
    name: string;
    tasks: ITask[];
}