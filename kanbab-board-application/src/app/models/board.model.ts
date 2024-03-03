import { ITasks, TasksList } from './tasksList.model';

export class Board {
    constructor(public name: string, public columns: TasksList[]) {}
}

export interface Iboard {
    boardName: string;
    columns: ITasks[];
}