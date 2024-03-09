import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { Board, Iboard } from '../../models/board.model';
import { TasksList } from '../../models/tasksList.model';
import { InitialInputComponent } from '../board-setup-form/initial-input/initial-input.component';
import { CommonModule } from '@angular/common';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CdkDropListGroup,CdkDropList, CdkDrag, InitialInputComponent, CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class ManiViewComponent {

// Creating dummy tasks lists
todoTasks: ITask[] = [
{
  taskName: "Task 1",
  taskDescription: "Complete assignment for English class"
},
// {
//   taskName: "Get to work",
//   taskDescription: "Reach at the bus stop early"
// },
// {
//   taskName: "Pick up groceries",
//   taskDescription: "Pick up groceries from nearest store"
// }
];
inProgressTasks: ITask[] = [
{
  taskName: "Task 2",
  taskDescription: "Prepare presentation slides for upcoming meeting"
},
// {
//   taskName: "Finish presentation",
//   taskDescription: "Get presentation review after giving it a final touch"
// },
// {
//  taskName: "Attend meeting",
//  taskDescription: "Participate actively and take notes"
// },
// {
// taskName: "Code new feature",
// taskDescription: "Implement feature according to specifications"
// }
];
completedTasks: ITask[] = [
{
  taskName: "Task 3",
  taskDescription: "Review code changes and provide feedback"
},
// {	
// 	taskName: "Submit report",
//     	taskDescription: "Compile and send the monthly report to stakeholders"
// },
// {	
// 	taskName: "Review code",
//     taskDescription: "Check for errors and optimize code efficiency"
// },

// {	
// 	taskName: "Send emails",
//     taskDescription: "Respond to inquiries and follow up on pending tasks"
// },
];

// Creating dummy tasks lists objects
todoList: TasksList = new TasksList("Todo", this.todoTasks);
inProgressList: TasksList = new TasksList("In Progress", this.inProgressTasks);
completedList: TasksList = new TasksList("Completed", this.completedTasks);

// Creating a board with the dummy tasks lists
// boardData: Board = new Board("MyBoard", [this.todoList, this.inProgressList, this.completedList]);
boardData: Iboard = {} as Iboard;
showModal: boolean = false;

  ngOninit(): void {
  }

  constructor() {
    this.boardData.boardName = "Board";
    this.boardData.columns = [];
    this.boardData.columns.push(this.todoList);
    this.boardData.columns.push(this.inProgressList);
    this.boardData.columns.push(this.completedList);
  }

  onBoardSetup(data: any) {
    this.showModal = false;
    this.boardData = data;
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  showCreateBoardModal(): void {
      this.showModal = true;
  }

}
