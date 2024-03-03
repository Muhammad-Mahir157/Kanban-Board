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

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CdkDropListGroup,CdkDropList, CdkDrag, InitialInputComponent, CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class ManiViewComponent {
  // Creating dummy tasks lists
todoTasks: string[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
inProgressTasks: string[] = ['Finish presentation', 'Attend meeting', 'Code new feature'];
completedTasks: string[] = ['Submit report', 'Review code', 'Send emails'];

// Creating dummy tasks lists objects
todoList: TasksList = new TasksList("Todo", this.todoTasks);
inProgressList: TasksList = new TasksList("In Progress", this.inProgressTasks);
completedList: TasksList = new TasksList("Completed", this.completedTasks);

// Creating a board with the dummy tasks lists
// boardData: Board = new Board("MyBoard", [this.todoList, this.inProgressList, this.completedList]);
boardData!: Iboard;


  onBoardSetup(data: any) {
    this.boardData = data;
  }

  drop(event: CdkDragDrop<string[]>) {
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

}
