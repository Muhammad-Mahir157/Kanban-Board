export class Task {
    constructor(public taskName: string, public taskDescription: string ){}
}

export interface ITask{
    taskName: string;
    taskDescription: string;
}