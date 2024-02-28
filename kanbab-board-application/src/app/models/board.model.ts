import { TasksList } from './tasksList.model';

export class Board {
    constructor(public name: string, public tasks: TasksList[]) {}
}